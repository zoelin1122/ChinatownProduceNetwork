import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls, Environment, useGLTF, OrbitControls} from "@react-three/drei";


function Scene() {
  const gltf = useGLTF("/fruit.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 3, position: [5, 5, 5] }}>
      {/* <CameraControls makeDefault /> */}
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Environment preset="dawn"  />
      <Scene />
    </Canvas>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);