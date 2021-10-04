import { FC } from 'react';
import { interpolate, useCurrentFrame, Sequence } from 'remotion';

type HelloWorldProps = {
	firstText: string;
	secondText: string;
};
export const HelloWorld: FC<HelloWorldProps> = ({ firstText, secondText }) => {
	const frame = useCurrentFrame();

	const fadeInTime = 90;

	const firstTextStartFrame = 30;
	const firstTextOpacity = interpolate(
		frame,
		[firstTextStartFrame, firstTextStartFrame + fadeInTime],
		[0, 1]
	);

	const secondTextStartFrame = 150;
	const secondTextOpacity = interpolate(
		frame,
		[secondTextStartFrame, secondTextStartFrame + fadeInTime],
		[0, 1]
	);

	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'black',
				color: 'cyan',
				fontSize: 200,
				fontFamily: 'Arial, Helvetica, sans-serif',
			}}
		>
			<Sequence name="FirstText" from={0}>
				<div
					style={{
						position: 'absolute',
						opacity: firstTextOpacity,
						top: 250,
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					{firstText}
				</div>
			</Sequence>
			<Sequence name="SecondText" from={150}>
				<div
					style={{
						position: 'absolute',
						opacity: secondTextOpacity,
						margin: '0 auto',
						top: 550,
						left: '50%',
						transform: 'translateX(-50%)',
					}}
				>
					{secondText}
				</div>
			</Sequence>
		</div>
	);
};
