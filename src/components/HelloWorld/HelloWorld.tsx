import { FC } from 'react';

type HelloWorldProps = {
	text: string;
};
export const HelloWorld: FC<HelloWorldProps> = ({ text }) => (
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
		<div>{text}</div>
	</div>
);
