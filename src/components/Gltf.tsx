import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

// Fonction pour charger et afficher le modèle GLTF avec animations
function Model() {
  const gltf = useGLTF("/Desktop.gltf");
  const { scene, animations } = gltf;
  const { actions } = useAnimations(animations, scene);

  const pivot = new THREE.Group();
  const box = new THREE.Box3().setFromObject(scene);
  const center = new THREE.Vector3();
  box.getCenter(center);
  scene.position.sub(center);
  pivot.add(scene);
  pivot.rotation.set(0, Math.PI, 0);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.play();
      }
    }
  }, [actions]);

  return <primitive object={pivot} scale={[5, 5, 5]} />;
}

// Page principale avec le Canvas
export default function Gltf() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

  // Définir la position initiale de la caméra
  const initialCameraPosition = new THREE.Vector3(0, 100, 250);

  return (
    <div className=" ">
      <Canvas
        onWheel={(e) => e.preventDefault()}
        style={{
          height: "600px",
          width: "100vw",
          backgroundColor: "transparent",
          cursor: "grab",
        }}
        camera={{
          position: [0, 100, 350],
          fov: 50,
        }}
        onCreated={({ camera, gl }) => {
          const handleResize = () => {
            if (camera instanceof THREE.PerspectiveCamera) {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
            }
            gl.setSize(window.innerWidth, window.innerHeight);
          };

          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={10} />
        <Model />
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={false}
          minDistance={150}
          maxDistance={500}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          onWheel={(e) => e.stopPropagation()}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/Desktop.gltf");
