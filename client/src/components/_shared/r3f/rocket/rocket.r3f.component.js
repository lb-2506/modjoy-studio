import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

// COMPONENTS
import { RocketModelR3fComponent } from '@/components/_shared/r3f/rocket/model/rocket.model.r3f.component';

export default function RocketR3fComponent(props) {
  const canvas = (
    <Canvas camera={{ position: [0, 0, props.contact ? 8 : 7], fov: 60, rotation: [0, 0, 0.7] }}>
      <Suspense fallback={null}>
        <pointLight intensity={200} position={[-2, 1, 5]} rotation={[37.261, 3.1637, 106.94]} color={'#FFFFFF'} />
        <ambientLight intensity={1.5} />
        <RocketModelR3fComponent isVisible={props.isVisible} />
      </Suspense>
    </Canvas>
  );

  return (
    <div className="font-bold absolute -top-full desktop:top-auto -right-[100px] desktop:relative -translate-y-[380px] desktop:-translate-y-[130px]">
     <div className={props.contact ? 'absolute -bottom-[150px] -left-[250px] h-[600px] w-[700px]' : 'w-[300px] h-[350px] desktop:h-[600px] desktop:w-[700px] desktop:-translate-y-[120px]'}>{canvas}</div>
    </div>
  ); 
}
