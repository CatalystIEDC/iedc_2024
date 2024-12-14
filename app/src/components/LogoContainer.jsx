import { useGLTF } from "@react-three/drei";
import React from "react";

const LogoContainer = () => {
  let model = useGLTF("./model/mac.glb");
  return (
    //    <mesh>
    //     <boxGeometry/>
    //    </mesh>
   <group position={[0,-10,20]}>
     <primitive object={model.scene}/>
   </group>
  );
};

export default LogoContainer;
