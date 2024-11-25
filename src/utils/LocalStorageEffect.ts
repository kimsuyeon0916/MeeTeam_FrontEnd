import { AtomEffect, DefaultValue } from 'recoil';

const LocalStorageEffect =
	<T>(key: string): AtomEffect<T> =>
	({ setSelf, onSet }) => {
		const savedValue = localStorage.getItem(key);

		if (savedValue !== null) {
			setSelf(JSON.parse(savedValue));
		}

		onSet((newValue: T, _: T | DefaultValue, isReset: boolean) => {
			if (isReset) {
				localStorage.removeItem(key);
			} else {
				localStorage.setItem(key, JSON.stringify(newValue));
			}
		});
	};

export default LocalStorageEffect;
