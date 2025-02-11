import { create } from 'zustand';

interface Store {
	token: string;
	setToken: (token: string) => void;
}

const tokenStorage = typeof window !== "undefined"
	? JSON.parse(window.localStorage.getItem('token')!)
	: null;

export const authStore = create<Store>()((set) => ({
	token: tokenStorage,
	setToken: (token: string) => set(() => ({ token })),
}));