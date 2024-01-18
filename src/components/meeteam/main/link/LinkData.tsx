import React from 'react';

interface Link {
	title: string;
	icon: string;
	link: string;
}

const linkList: Link[] = [
	{
		title: '카카오톡',
		icon: `https://s3-alpha-sig.figma.com/img/31e2/9bfd/f0a8dc85868b78e31449c2b4eab56063?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQs0DMIJZVhmScAgix~ExDCnWfCjM2pdywwgiALTsRDRey76ZnK0hKDLUTMRVT4fS-SCIidrn1a4LihccCeieOAt7m4gkClx0Sb1lyBCi67jKgi6em92rdedTP8M3PZPlv1wn~OrK-tha2RF2tUor-1zkvC3Yh8U4jRYM6OaCZu028cwoHLegn7dj0JgdBpMUqYgjhRDLQRUpMdaVhcxkImCEKkRGr06UmvqfkflMvustHJX~eeP2gO2f-chKXgcnn3uriH0P-k8~qQCKEj2TAcExeT675LnE8r7jMoOEPlT4G1ms7-O5uDEafeqe7FRK6Gb8xH7uQ2pjnXh2lEJKQ__`,
		link: `https://open.kakao.com/o/g349or1f`,
	},
	{
		title: 'Slack',
		icon: `https://s3-alpha-sig.figma.com/img/7033/8bde/4a4fec71f547e9967b41ac18328ded94?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eVlwWF-azVvjgH-1V1gHd3j95LQk4nnRgWMTc7bf9DzEPZFx-Bh4-zsmNO9Jgh2C-auDIGz5f8TGD~QKkhjaw0Oayv2D0l3WqZosUapQv1TPdn7LPcjvkghAugE8W0aLrBpGpvZ7ULQQNeF4eu4D-V8FX~jOBLL9eWqP7VUMi3CjAAbZFF1O66uM9qDk7bavMsoyGeq3qHkgO4DV73KMdzvtgCd5rtJ7zpg26805tmL5UxPNHf1eqDxm0cdMp~pMTHCJSV5KFMQIlMVv0CZt8tZyrYFMOfOcYLR7VUnTzX8lNKKmTWRDUzgJAcHQ6zUQwSCMjzaEtCtmgBZehK-zsQ__`,
		link: ``,
	},
	{
		title: 'Notion',
		icon: `https://s3-alpha-sig.figma.com/img/53bb/da8a/633c9e04581128ab07988700dd401cb4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lBT9wQbXhLGAKD6Li-OsddDhIH9U4aI4WgT-g6IfMv9NmXEe7mTDQwZIevaLY3oHRgw9pwwAnfgnk6vwb-KC8yIbb7BhnNrjdpPFHR41GKegzs675wtA7O08QQLZnkbTSwIolBeRLQ33mAm3AYVztRiVl-A3SQsVmcA2IfvbAWdrf9ctkoDc~NJ64Rb-HAvijT~WTSAGQrKby9Fx~aZcSDzRWbZF9AGm~IewoR-Z3zuHUKAvnccn5THaDFAvV3YS1hQP35ysBQuYqeZ-TU4AUv7ol3XneiKxnwZcZ1OcqxYy16TilZHjMUMYkQXqIALcALruxCMCsaI10CRTX0Y3Rg__`,
		link: `https://www.notion.so/516c7acc904846a98e76bf968a80e24e?pvs=4`,
	},
	{
		title: 'Discord',
		icon: `https://s3-alpha-sig.figma.com/img/08d1/5f74/0ebbce5b2c2ff503ec24e82ef6831351?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RW~uGWgoIIeCWcG~MQ1gYETtl8A7Qef1ejY9l1Xr7iUytToSuFNn7QeOQvxPXPCag3gf2PYH70sYawiS4oTR8~-wcW1TdZ57EIORljxlz~6wT8~DxasUBgSV7gVa~dTid80zDhNP4rvwyxZgILFj9AOU8oRYyhvWqdnDotGBmfGuvCbGBpjAX2Q0kOqtY175-GEVEzzFMH1bvOzU18wpu8yyJUm1aH8hgoiycIf4WFWczz7kwkZzre-USRW3Vu2Qwq6l1BdZ981LmTQ1EnZF~Kh7QEDblpJZqTTDef4IhVOKCEr7ELSsi~vHBVxb~wzaFxq3eY6Pu0K~ShUaL8l~sg__`,
		link: `https://discord.gg/uF63YG9R`,
	},
];

const LINK_PLUS_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
		<g opacity='0.8'>
			<rect x='0.25' y='7.49609' width='15' height='1.5' rx='0.75' fill='#373F41' />
			<rect
				x='8.49219'
				y='0.75'
				width='15'
				height='1.5'
				rx='0.75'
				transform='rotate(90 8.49219 0.75)'
				fill='#373F41'
			/>
		</g>
	</svg>
);

const LINK_BOTTOM_ARROW_ICON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'>
		<path
			d='M1.5 1.25L6.68241 6.6716C6.9818 6.98481 7.48355 6.9799 7.77676 6.66089L12.75 1.25'
			stroke='black'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
);

const LINK_SHORTCUTS_BUTTON = (
	<svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19' fill='none'>
		<path
			d='M16 7L16 2.5M16 2.5H11.5M16 2.5L10 8.5M7.75 4H6.1C4.83988 4 4.20982 4 3.72852 4.24524C3.30516 4.46095 2.96095 4.80516 2.74524 5.22852C2.5 5.70982 2.5 6.33988 2.5 7.6V12.4C2.5 13.6601 2.5 14.2902 2.74524 14.7715C2.96095 15.1948 3.30516 15.539 3.72852 15.7548C4.20982 16 4.83988 16 6.1 16H10.9C12.1601 16 12.7902 16 13.2715 15.7548C13.6948 15.539 14.039 15.1948 14.2548 14.7715C14.5 14.2902 14.5 13.6601 14.5 12.4V10.75'
			stroke='#151515'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

export { linkList, LINK_PLUS_ICON, LINK_BOTTOM_ARROW_ICON, LINK_SHORTCUTS_BUTTON };
