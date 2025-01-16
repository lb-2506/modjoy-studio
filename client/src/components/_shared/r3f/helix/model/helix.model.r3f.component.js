import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function HelixModelR3fComponent(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model/helix.glb");

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        material.toneMapped = false;
      });
    }
  }, [materials]);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.GSG_Doodads_Helix_05.geometry}
        material={nodes.GSG_Doodads_Helix_05.material}
        scale={25}
      />
    </group>
  );
}

useGLTF.preload("/model/helix.glb");
