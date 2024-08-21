import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";

export default function Gltf() {
  const divRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      100,
      1000
    )
  );
  cameraRef.current.position.set(0, 100, 500);
  const rendererRef = useRef(
    new THREE.WebGLRenderer({ antialias: true, alpha: true })
  );

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.clientWidth;
      const height = divRef.current.clientHeight;

      const renderer = rendererRef.current; // Copie la valeur de rendererRef.current

      // Configuration du renderer
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x000000, 0); // Rendre le fond transparent
      divRef.current.appendChild(renderer.domElement);

      // Ajout des lumières
      const ambientLight = new THREE.AmbientLight(0xe7d8ce, 1); // Lumière ambiante
      sceneRef.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xe7d8ce, 1); // Lumière directionnelle
      directionalLight.position.set(5, 5, 7).normalize();
      sceneRef.current.add(directionalLight);

      // Configuration des contrôles
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        renderer.domElement
      );
      controlsRef.current.enablePan = false;
      controlsRef.current.enableZoom = false;
      controlsRef.current.minDistance = 50;
      controlsRef.current.maxDistance = 200;
      controlsRef.current.maxPolarAngle = Math.PI / 1;
      controlsRef.current.minPolarAngle = Math.PI / 4;
      controlsRef.current.target.set(0, -20, 10); // Centrer la caméra sur la scène
      controlsRef.current.update();

      // Chargement et ajout du modèle GLTF à la scène
      const loader = new GLTFLoader();
      loader.load("/Desktop.gltf", (gltf) => {
        const scene = gltf.scene;

        // Centrer le modèle
        const box = new THREE.Box3().setFromObject(scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        scene.position.sub(center);
        sceneRef.current.add(scene);
        scene.rotation.set(Math.PI / 16, Math.PI, 0);

        // Jouer les animations
        const { animations } = gltf;
        const mixer = new THREE.AnimationMixer(scene);
        animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });

        // Démarrer le rendu de la scène
        const clock = new THREE.Clock();
        const animate = () => {
          requestAnimationFrame(animate);
          const delta = clock.getDelta();
          mixer.update(delta);
          controlsRef.current?.update();
          renderer.render(sceneRef.current, cameraRef.current);
        };
        animate();
      });

      // Fonction de redimensionnement
      const handleResize = () => {
        if (divRef.current) {
          const width = divRef.current.clientWidth;
          const height = divRef.current.clientHeight;
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          renderer.setSize(width, height);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        renderer.dispose(); // Utilise la variable locale ici
        controlsRef.current?.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        marginTop: "3rem",
        width: "100%",
        height: "500px",
        position: "relative",
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    ></div>
  );
}
useGLTF.preload("/assets/Desktop.gltf");
