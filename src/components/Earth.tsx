/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useCurrentFrame } from 'remotion';

const Model = ({ ...props }) => {
	const group = useRef();
	const { nodes, materials } = useGLTF(
		'https://solarsystem.nasa.gov/system/resources/gltf_files/2393_Earth_1_12756.glb'
	) as any;
	const frame = useCurrentFrame();

	return (
		<group
			ref={group}
			rotation={[0, frame * 0.008, 0]}
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.Cube001.geometry}
				material={materials['Default OBJ']}
			/>
		</group>
	);
};

useGLTF.preload('/Earth.glb');

export default Model;
