import { AtomEffect } from 'recoil';

const SessionStorageEffect: <T extends string>(key: string) => AtomEffect<T> =
	(key: string) =>
	({ setSelf, onSet }) => {
		const savedValue = sessionStorage.getItem(key);
		if (savedValue !== '') {
			setSelf(savedValue);
		}

		onSet((newValue, _, isReset) => {
			if (isReset) return sessionStorage.removeItem(key);
			return sessionStorage.setItem(key, newValue);
		});
	};

export default SessionStorageEffect;
