import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CameraControls, Environment, useGLTF, OrbitControls} from "@react-three/drei";


function Scene() {
  const gltf = useGLTF("assets/Fruit.gltf");

  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

function App() {
  return (
    <Canvas camera={{ fov: 2, position: [4, 4, 4] }}>
      {/* <CameraControls makeDefault /> */}
      <OrbitControls enablePan={true} enableZoom={false} enableRotate={true} />
      <Environment preset="dawn"  background/>
      <Scene />
    </Canvas>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);