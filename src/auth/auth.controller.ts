import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDto } from './dto';

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}
 
  @MessagePattern('auth.register.user')
  registerUser(@Payload() registerUserDto: RegisterUserDto) {
    return this.authService.registerUser(registerUserDto); 
  }
 
  @MessagePattern('auth.login.user')
  loginUser() {
    return 'Login user';
  }

  @MessagePattern('auth.verify.user')
  verifyUser() {
    return 'Verify user token';
  }
 
}
