import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { ErrorResponse } from "@/infrastructure/interfaces/global.interface";
import { HttpImpl } from './http.impl';

interface Options {
	baseURL: string;
	params?: Record<string, string>;
	headers?: Record<string, string | boolean>;
}

export class HttpAdapter implements HttpImpl {
	private axiosInstance: AxiosInstance;

	constructor(options: Options) {
		this.axiosInstance = axios.create({
			baseURL: options.baseURL,
			params: options.params,
			headers: options.headers,
			withCredentials: true,
		});
	}

	private setAccessToken(token: string) {
		this.axiosInstance.interceptors.request.use(async (config) => {
			if (config.headers?.Authorization) {
				return config;
			}
			config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
	}
	async get<T>(
		url: string,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T> {
		if (token) this.setAccessToken(token);

		try {
			const { data } = await this.axiosInstance.get<T>(url, options);

			return data;
		} catch (error) {
			const serverError = error as AxiosError;
			const errorMessage = serverError.response?.data as ErrorResponse;
			console.log(errorMessage);

			throw new Error(errorMessage.error);
		}
	}

	async post<T>(
		url: string,
		body: Record<string, unknown>,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T> {
		if (token) this.setAccessToken(token);

		try {
			const { data } = await this.axiosInstance.post<T>(url, body, options);
			return data;
		} catch (error) {
			const serverError = error as AxiosError;
			const errorMessage = serverError.response?.data as ErrorResponse;
			console.log(errorMessage);

			throw new Error(errorMessage.error);
		}
	}

	async put<T>(
		url: string,
		body: Record<string, unknown>,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T> {
		if (token) this.setAccessToken(token);

		try {
			const { data } = await this.axiosInstance.put<T>(url, body, options);
			return data;
		} catch (error) {
			const serverError = error as AxiosError;
			const errorMessage = serverError.response?.data as ErrorResponse;
			console.log(errorMessage);

			throw new Error(errorMessage.error);
		}
	}

	async delete<T>(
		url: string,
		token?: string,
		options?: AxiosRequestConfig,
	): Promise<T> {
		if (token) this.setAccessToken(token);

		try {
			const { data } = await this.axiosInstance.delete<T>(url, options);
			return data;
		} catch (error) {
			const serverError = error as AxiosError;
			const errorMessage = serverError.response?.data as ErrorResponse;
			console.log(errorMessage);

			throw new Error(errorMessage.error);
		}
	}

}