export interface IAuthService {
    signIn(username: string, pass: string): Promise<{ accessToken: string }>;
}

export const IAuthService = Symbol("IAuthService");