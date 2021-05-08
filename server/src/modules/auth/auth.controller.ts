import { Body, Controller, Delete, Get, Post, Res, Session, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RegisterDto } from './dto/register.dto'
import { LoginDto } from './dto/login.dto'
import { UserAuthGuard } from './guards/user-auth.guard'
import { Response } from 'express'


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }


  @Get()
  @UseGuards(UserAuthGuard)
  test() {
    return 'Ты авторизован'
  }

  @Post('register')
  async register(@Body() newUser: RegisterDto) {
    await this.authService.register(newUser)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Session() session: Record<string, any>) {
    return this.authService.login(loginDto, session)
  }

  @Delete('logout')
  async logout(@Session() session, @Res() res: Response) {
    await this.authService.logout(session, res)
    res.send()
  }

}