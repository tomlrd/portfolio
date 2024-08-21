import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useAnimations } from "@react-three/drei";

function Model({ scene }: { scene: THREE.Scene }) {
  const { animations } = useGLTF("/Desktop.gltf");
  const { actions } = useAnimations(animations, scene);

  // Centrer le modèle dans la scène
  const box = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  box.getCenter(center);
  scene.position.sub(center);
  scene.rotation.set(Math.PI, Math.PI / 8, 0); // Rotation initiale : 180° sur X, légère rotation sur Y

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);

  return null;
}

export default function Gltf() {
  const divRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      100,
      10000
    )
  );
  const rendererRef = useRef(
    new THREE.WebGLRenderer({ antialias: true, alpha: true })
  );

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.clientWidth;
      const height = divRef.current.clientHeight;

      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      rendererRef.current.setClearColor(0x000000, 0);
      divRef.current.appendChild(rendererRef.current.domElement);

      // Positionner la caméra
      cameraRef.current.position.set(0, 100, 500);

      // Ajouter les lumières
      const ambientLight = new THREE.AmbientLight(0xe7d8ce, 1);
      sceneRef.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xe7d8ce, 1);
      directionalLight.position.set(5, 5, 7).normalize();
      sceneRef.current.add(directionalLight);

      // Configurer les contrôles
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controlsRef.current.enablePan = false;
      controlsRef.current.enableZoom = false;
      controlsRef.current.minDistance = 50;
      controlsRef.current.maxDistance = 150;
      controlsRef.current.maxPolarAngle = Math.PI / 1;
      controlsRef.current.minPolarAngle = Math.PI / 4;
      controlsRef.current.target.set(0, 0, 0); // Centrer la caméra sur la scène
      controlsRef.current.update();

      // Charger et ajouter le modèle GLTF à la scène
      const loader = new GLTFLoader();
      loader.load("/Desktop.gltf", (gltf) => {
        const scene = gltf.scene;
        scene.rotation.set(Math.PI / 16, Math.PI, 0);

        // Centrer le modèle
        const box = new THREE.Box3().setFromObject(scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        scene.position.sub(center);
        sceneRef.current.add(scene);

        // Jouer les animations
        const { animations } = gltf;
        const mixer = new THREE.AnimationMixer(scene);
        animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });

        const clock = new THREE.Clock();
        const animate = () => {
          requestAnimationFrame(animate);
          const delta = clock.getDelta();
          mixer.update(delta);
          controlsRef.current?.update();
          rendererRef.current.render(sceneRef.current, cameraRef.current);
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
          rendererRef.current.setSize(width, height);
        }
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        rendererRef.current.dispose();
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
