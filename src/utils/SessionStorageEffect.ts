import { AtomEffect, DefaultValue } from 'recoil';

const SessionStorageEffect =
	<T extends string>(key: string): AtomEffect<T> =>
	({ setSelf, onSet }) => {
		const savedValue = sessionStorage.getItem(key);

		if (savedValue !== '') {
			savedValue && setSelf(savedValue as T);
		}

		onSet((newValue: T, _: T | DefaultValue, isReset: boolean) => {
			if (isReset) {
				sessionStorage.removeItem(key);
			} else {
				sessionStorage.setItem(key, newValue);
			}
		});
	};

export default SessionStorageEffect;
