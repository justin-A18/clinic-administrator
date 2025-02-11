import { LoginResponse } from "@/infrastructure/interfaces/auth.interface";

export class AuthMapper {
	public static toToken(data: LoginResponse): string {
		return data.data;
	}
}