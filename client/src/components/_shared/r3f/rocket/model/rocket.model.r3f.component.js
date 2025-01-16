import React, { useEffect, useRef, useState } from 'react';

// THREE
import { useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function RocketModelR3fComponent(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model/rocket.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    materials.purpleMoon.toneMapped = false;
    materials.flame.toneMapped = false;
    materials.white.toneMapped = false;
    materials.lightBlue.toneMapped = false;

    actions.helixRotationAction.play();
    actions.helixRotationAction.setDuration(10);

    if (props.isVisible) {
      actions.flameAction.play();
      actions.flameAction.setDuration(5);
      actions.flameAction.setLoop(THREE.LoopOnce, 1);
      actions.rocketAction.play();
      actions.rocketAction.setDuration(5);
      actions.rocketAction.setLoop(THREE.LoopOnce, 1);
    }

  }, [actions, props.isVisible]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rocket" position={[0.219, -0.123, 0]} rotation={[Math.PI / 2, -0.045, -0.686]} scale={0.01}>
          <group
            name="helixRotation"
            position={[-17.344, -14.205, -11.325]}
            rotation={[-Math.PI / 2, -0.686, 0.045]}
            scale={100}
          >
            <mesh
              name="helix1"
              geometry={nodes.helix1.geometry}
              material={materials.lightBlue}
              position={[-0.778, -1.365, 0.375]}
              rotation={[Math.PI / 2, 0, 2.663]}
              scale={0.011}
            />
            <mesh
              name="helix2"
              geometry={nodes.helix2.geometry}
              material={materials.lightBlue}
              position={[0.036, -1.363, -0.818]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.011}
            />
            <mesh
              name="helix3"
              geometry={nodes.helix3.geometry}
              material={materials.lightBlue}
              position={[0.753, -1.365, 0.441]}
              rotation={[Math.PI / 2, 0, 0.635]}
              scale={0.011}
            />
          </group>
          <mesh
            name="flame"
            geometry={nodes.flame.geometry}
            material={materials.flame}
            position={[-16.554, -13.558, 155.918]}
            scale={0}
          />
          <mesh
            name="base"
            geometry={nodes.base.geometry}
            material={materials.white}
            position={[-13.644, 26.644, -9.569]}
            rotation={[0, 0, 1.491]}
            scale={3.063}
          />
          <mesh
            name="hublot"
            geometry={nodes.hublot.geometry}
            material={materials.lightBlue}
            position={[-59.538, 39.438, -61.84]}
            rotation={[-0.097, -0.076, -2.479]}
            scale={[2.032, 2.434, 2.032]}
          />
          <mesh
            name="tube"
            geometry={nodes.tube.geometry}
            material={materials.lightBlue}
            position={[-16.826, -13.848, 32.559]}
            rotation={[0, 0, -1.948]}
            scale={1.093}
          />
        </group>
        <mesh
          name="Moon"
          geometry={nodes.Moon.geometry}
          material={materials.purpleMoon}
          position={[0, 1.421, -5.732]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={3.048}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/model/rocket.glb');