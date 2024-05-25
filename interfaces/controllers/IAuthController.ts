import { UserLoginDto, UserRegisterDto } from "@dto/UserDto";

export interface IAuthController {

    signIn(signInDto: UserLoginDto): any;
  
    getProfile(req: any): any;
  
    register(user: UserRegisterDto): any;
}