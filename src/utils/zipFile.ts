import JSZip from 'jszip';
import { Image } from '../types';

const zipFile = (images: Image[]) => {
	const zip = new JSZip();
	images.forEach(({ fileName, file }: Image) => {
		if (file) {
			zip.file(fileName as string, file);
		}
	});
	return zip.generateAsync({ type: 'blob' });
};

export default zipFile;
