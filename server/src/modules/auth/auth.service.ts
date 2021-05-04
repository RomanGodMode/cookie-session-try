import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async register(): Promise<null> {
    return null
  }

  async login(session: Record<string, any>): Promise<null> {

    // throw new UnauthorizedException('Чел ты ')

    return null
  }

  async logout(): Promise<null> {
    return null
  }
}