'use client';

import { useMutation } from "@tanstack/react-query";

import { apiFetcher } from "@/config/adapters/api.adapter";
import { loginUserUseCase } from "@/core/use-cases/auth";

import { useLocalStorage } from "usehooks-ts";
import { authStore } from "@/app/_providers/store";
import { toast } from "../toast";

export const useUserLoginMutation = () => {

	const [, setUserStorage] = useLocalStorage<string>("token", "");
	const { setToken } = authStore();

	const loginMutation = useMutation({
		mutationKey: ["login"],
		mutationFn: (body: Record<string, unknown>) => {
			return loginUserUseCase(apiFetcher, body);
		},
		onSuccess: (data) => {
			setUserStorage(data);
			setToken(data);
		},
		onError: (error) => {
			toast({
				variant: 'destructive',
				title: '¡Vaya! Algo salió mal.',
				description: error.message,
			});
		}
	});

	return {
		loginMutation
	};
};