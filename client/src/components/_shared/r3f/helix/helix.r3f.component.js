import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

// COMPONENTS
import { HelixModelR3fComponent } from '@/components/_shared/r3f/helix/model/helix.model.r3f.component';

// R3F
import { Environment, OrbitControls } from '@react-three/drei';

export default function HelixR3fComponent(props) {
  const canvas = (
    <Canvas camera={{ position: [10, 10, 10], fov: 23 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <Environment files="/model/background-light.hdr" />
        <HelixModelR3fComponent />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );

  return <div className='absolute cursor-pointer bottom-0 desktop:top-[190px] -right-[5px] desktop:right-[30px] w-[120px] h-[120px] desktop:w-[250px] desktop:h-[250px]'>{canvas}</div>;
}
