import { useEffect, useRef, useState } from "react";
import {
  AmbientLight,
  AnimationMixer,
  Box3,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  SRGBColorSpace,
  Timer,
  Vector3,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { cn } from "../lib/cn";

const MODEL_URL = "/Desktop.gltf";

export default function DesktopScene({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(30, 1, 0.1, 5000);
    camera.position.set(0, 0.34, 1);

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.domElement.classList.add("cursor-grab", "active:cursor-grabbing");
    container.appendChild(renderer.domElement);

    scene.add(new AmbientLight(0xffffff, 2.1));

    const keyLight = new DirectionalLight(0xffe9d2, 2.6);
    keyLight.position.set(6, 7, 9);
    scene.add(keyLight);

    const rimLight = new DirectionalLight(0x8fb6ff, 1.3);
    rimLight.position.set(-7, 3, -6);
    scene.add(rimLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.7;
    controls.minPolarAngle = Math.PI / 4;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = !window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    controls.autoRotateSpeed = 0.5;
    controls.target.set(0, 0, 0);
    controls.update();

    const modelSize = new Vector3();

    const frameCamera = () => {
      if (modelSize.lengthSq() === 0) {
        return;
      }
      const halfFov = (camera.fov * Math.PI) / 360;
      const vertical = modelSize.y / 2 / Math.tan(halfFov);
      const horizontal = modelSize.x / 2 / (Math.tan(halfFov) * camera.aspect);
      const distance =
        Math.max(vertical, horizontal) * 1.25 + modelSize.z / 2;

      const direction = camera.position
        .clone()
        .sub(controls.target)
        .normalize();
      camera.position
        .copy(controls.target)
        .addScaledVector(direction, distance);
      camera.near = distance / 100;
      camera.far = distance * 10;
      camera.updateProjectionMatrix();
      controls.update();
    };

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) {
        return;
      }
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      frameCamera();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let mixer: AnimationMixer | null = null;
    const timer = new Timer();
    timer.connect(document);

    new GLTFLoader().load(MODEL_URL, (gltf) => {
      const model = gltf.scene;
      model.rotation.set(Math.PI / 16, Math.PI, 0);

      const box = new Box3().setFromObject(model);
      model.position.sub(box.getCenter(new Vector3()));
      box.getSize(modelSize);
      scene.add(model);
      frameCamera();

      mixer = new AnimationMixer(model);
      for (const clip of gltf.animations) {
        mixer.clipAction(clip).play();
      }

      setReady(true);
    });

    let frame = 0;
    const render = (timestamp: number) => {
      frame = requestAnimationFrame(render);
      timer.update(timestamp);
      mixer?.update(timer.getDelta());
      controls.update();
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      timer.disconnect();
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn(
        "size-full transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
    />
  );
}
