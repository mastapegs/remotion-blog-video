import { FC } from 'react';
import { Composition } from 'remotion';

const EmptyComponent: FC = () => null;

export const RemotionVideo: FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={EmptyComponent}
				durationInFrames={60}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
