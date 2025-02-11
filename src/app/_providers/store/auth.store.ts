import { create } from 'zustand';

interface Store {
	token: string | null;
	setToken: (token: string) => void;
	removeToken: () => void;
}

const tokenStorage = typeof window !== "undefined"
	? JSON.parse(window.localStorage.getItem('token')!)
	: null;

export const authStore = create<Store>()((set) => ({
	token: tokenStorage,
	setToken: (token: string) => set(() => ({ token })),
	removeToken: () => set(() => {
		window.localStorage.removeItem('token');
		return { token: null };
	}),
}));