import { FC, Suspense } from 'react';
import { interpolate, useCurrentFrame, Sequence } from 'remotion';
import { ThreeCanvas } from '@remotion/three';
import Earth from '../Earth';

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

	const secondTextStartFrame = 120;
	const secondTextOpacity = interpolate(
		frame,
		[secondTextStartFrame, secondTextStartFrame + fadeInTime],
		[0, 1]
	);

	const mainTextFadeOutTime = 30;
	const mainTextFadeOutFrame = 240;
	let mainTextOpacity;
	if (frame < mainTextFadeOutFrame) {
		mainTextOpacity = 1;
	} else {
		mainTextOpacity = interpolate(
			frame,
			[mainTextFadeOutFrame, mainTextFadeOutFrame + mainTextFadeOutTime],
			[1, 0]
		);
	}

	let earthOpacity = 0;
	if (frame > mainTextFadeOutFrame + mainTextFadeOutTime) {
		earthOpacity = interpolate(
			frame,
			[
				mainTextFadeOutFrame + mainTextFadeOutTime,
				mainTextFadeOutFrame + mainTextFadeOutTime + fadeInTime,
			],
			[0, 1]
		);
	}

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
			<Sequence
				name="Text"
				from={0}
				durationInFrames={mainTextFadeOutFrame + mainTextFadeOutTime}
			>
				<div style={{ opacity: mainTextOpacity }}>
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
					<Sequence name="SecondText" from={secondTextStartFrame}>
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
			</Sequence>
			<Sequence name="Earth" from={mainTextFadeOutFrame + mainTextFadeOutTime}>
				<div style={{ opacity: earthOpacity }}>
					<ThreeCanvas
						width={1920}
						height={1080}
						camera={{ fov: 75, position: [0, 2, -7] }}
					>
						{/* <ambientLight /> */}
						<pointLight position={[-5, 2, -5]} />
						<Suspense fallback={null}>
							<Earth scale={0.005} />
						</Suspense>
					</ThreeCanvas>
				</div>
			</Sequence>
		</div>
	);
};
