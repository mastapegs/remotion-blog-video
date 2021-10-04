import { FC } from 'react';
import { Composition } from 'remotion';
import { HelloWorld } from './components/HelloWorld';

export const RemotionVideo: FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={720}
				fps={60}
				width={1920}
				height={1080}
				defaultProps={{
					firstText: 'Hello',
					secondText: 'World!',
				}}
			/>
		</>
	);
};
