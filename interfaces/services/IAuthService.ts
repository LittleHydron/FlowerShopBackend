export interface IAuthService {
    signIn(username: string, password: string): Promise<string>;
}