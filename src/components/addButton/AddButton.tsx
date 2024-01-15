const AddButton = () => {
	return (
		<>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='74'
				height='75'
				viewBox='0 0 74 75'
				fill='none'
			>
				<g opacity='0.8' filter='url(#filter0_d_2503_1035)'>
					<circle cx='36.75' cy='34.5' r='18' fill='white' />
					<rect x='27.75' y='33.5684' width='18' height='2.17241' rx='1.08621' fill='#424253' />
					<rect
						x='37.9883'
						y='25.5'
						width='18'
						height='2.17241'
						rx='1.08621'
						transform='rotate(90 37.9883 25.5)'
						fill='#424253'
					/>
				</g>
				<defs>
					<filter
						id='filter0_d_2503_1035'
						x='0'
						y='0.75'
						width='73.5'
						height='73.5'
						filterUnits='userSpaceOnUse'
						color-interpolation-filters='sRGB'
					>
						<feFlood flood-opacity='0' result='BackgroundImageFix' />
						<feColorMatrix
							in='SourceAlpha'
							type='matrix'
							values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
							result='hardAlpha'
						/>
						<feOffset dy='3' />
						<feGaussianBlur stdDeviation='9.375' />
						<feComposite in2='hardAlpha' operator='out' />
						<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0' />
						<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2503_1035' />
						<feBlend
							mode='normal'
							in='SourceGraphic'
							in2='effect1_dropShadow_2503_1035'
							result='shape'
						/>
					</filter>
				</defs>
			</svg>
		</>
	);
};

export default AddButton;
