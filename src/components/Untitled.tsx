/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 untitled.glb --types 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/untitled.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials.Material}
        position={[0, 0, -0.49]}
        rotation={[Math.PI / 2, 0, -0.367]}
      />
    </group>
  );
}

useGLTF.preload("/untitled.glb");
