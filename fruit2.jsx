import ReactDOM from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useLayoutEffect, useEffect } from "react";
import { CameraControls, Environment, useGLTF, OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const gltf = useGLTF("assets/fruit_small.gltf");

  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll();
  useLayoutEffect(() => gltf.scene.traverse(node => node.isMesh && (node.castShadow = node.receiveShadow = true)), [gltf.scene]);
  useLayoutEffect(() => gltf.animations.forEach((clip) => gltf.mixer.clipAction(clip).play()), [gltf.animations, gltf.mixer]);

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();
    const speed = 0.5;
    const offset = 1 - scroll.offset;
    gltf.scene.rotation.y = elapsedTime * speed * offset;
  });

  return (
    <primitive object={gltf.scene} />
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 1, position: [1, -4, 7] }}>
      {/* <CameraControls makeDefault /> */}
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Environment preset="dawn" />
      <Suspense fallback={null}>
        <ScrollControls pages={3}>
          <Scene />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);