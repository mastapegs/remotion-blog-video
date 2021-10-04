import { FC } from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

type HelloWorldProps = {
	text: string;
};
export const HelloWorld: FC<HelloWorldProps> = ({ text }) => {
	const frame = useCurrentFrame();

	const fadeInTime = 90;
	const startFrame = 30;
	const opacity = interpolate(
		frame,
		[startFrame, startFrame + fadeInTime],
		[0, 1]
	);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				backgroundColor: 'black',
				color: 'cyan',
				fontSize: 200,
				fontFamily: 'Arial, Helvetica, sans-serif',
			}}
		>
			<div style={{ opacity }}>{text}</div>
		</div>
	);
};
