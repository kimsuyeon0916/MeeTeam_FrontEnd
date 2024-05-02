import JSZip from 'jszip';
import { BlobFile } from '../types';

const unzipFile = async (zipFileUrl: string) => {
	const extractedFiles: BlobFile[] = []; // 압축 해제된 파일들을 저장할 배열
	const zip = new JSZip();
	return fetch(zipFileUrl)
		.then(res => res.arrayBuffer())
		.then(buffer => {
			return zip.loadAsync(buffer);
		})
		.then(zip => {
			// 압축 파일 내의 파일들을 압축 해제하고 배열에 추가
			const promises = Object.keys(zip.files).map(filename => {
				return zip.files[filename].async('blob').then(blob => {
					extractedFiles.push({ fileName: filename, blob: blob });
				});
			});
			// 모든 파일 압축 해제가 완료된 후 압축 해제된 파일들을 반환
			return Promise.all(promises).then(() => extractedFiles);
		});
};

export default unzipFile;
