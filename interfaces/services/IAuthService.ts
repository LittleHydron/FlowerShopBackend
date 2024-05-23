export interface IAuthService {
    signIn(username: string, pass: string): Promise<{ accessToken: string }>;
    register(user: Record<string, any>): Promise<{ accessToken: string }>;
}

export const IAuthService = Symbol("IAuthService");