import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}
 
  @MessagePattern('auth.register.user')
  registerUser() {
    return 'Register user';
  }
 
  @MessagePattern('auth.login.user')
  loginUser() {
    return 'Login user';
  }

  @MessagePattern('auth.verify.user')
  tokenUser() {
    return 'Verify token';
  }
 
}
