import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF, useAnimations } from "@react-three/drei";

// Fonction pour charger et afficher le modèle GLTF avec animations
function Model({ scene }: { scene: THREE.Scene }) {
  const { animations } = useGLTF("/Desktop.vox");
  const { actions } = useAnimations(animations, scene);

  // Utiliser directement `scene` au lieu de créer un `Group`
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

  return null; // Ne pas retourner de nouvel objet, les changements sont faits directement sur `scene`
}

// Page principale avec une `div` comme conteneur
export default function Gltf() {
  const divRef = useRef<HTMLDivElement>(null); // Typage explicite de la référence
  const controlsRef = useRef<OrbitControls | null>(null);
  const sceneRef = useRef(new THREE.Scene());
  const cameraRef = useRef(
    new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
  );
  const rendererRef = useRef(
    new THREE.WebGLRenderer({ antialias: true, alpha: true })
  ); // `alpha: true` pour la transparence

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.clientWidth;
      const height = divRef.current.clientHeight;

      // Configuration du renderer
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(window.devicePixelRatio);
      rendererRef.current.setClearColor(0x000000, 0); // Rendre le fond transparent
      divRef.current.appendChild(rendererRef.current.domElement);

      // Configuration de la caméra
      cameraRef.current.position.set(0, 300, 1000);

      // Ajout des lumières
      const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Lumière ambiante
      sceneRef.current.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Lumière directionnelle
      directionalLight.position.set(5, 5, 7).normalize();
      sceneRef.current.add(directionalLight);

      // Configuration des contrôles
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controlsRef.current.enablePan = false;
      controlsRef.current.enableZoom = false;
      controlsRef.current.minDistance = 100;
      controlsRef.current.maxDistance = 200;
      controlsRef.current.maxPolarAngle = Math.PI / 1;
      controlsRef.current.minPolarAngle = Math.PI / 4;

      // Chargement et ajout du modèle GLTF à la scène
      const loader = new GLTFLoader();
      loader.load("/Desktop.gltf", (gltf) => {
        const scene = gltf.scene;

        // Appliquer une rotation initiale de 180 degrés sur l'axe x et une légère rotation sur l'axe y
        scene.rotation.set(Math.PI / 16, Math.PI, 0); // Rotation initiale : 180° sur X, légère rotation sur Y
        sceneRef.current.add(scene);

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
          mixer.update(delta); // Mettre à jour le mixeur d'animation
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
      className="mt-2"
      ref={divRef}
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        backgroundColor: "transparent",
        overflow: "hidden",
      }}
    ></div>
  );
}
