import { Controller, Delete, Get, Post, Session } from '@nestjs/common'
import { AuthService } from './auth.service'


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Get()
  isAuth(@Session() session: Record<string, any>) {
    return session
  }

  @Post('register')
  register() {
    this.authService.register()
  }

  @Post('login')
  async login(@Session() session: Record<string, any>) {
    return this.authService.login(session)
  }

  @Delete('logout')
  logout() {
    return this.authService.logout()
  }

}