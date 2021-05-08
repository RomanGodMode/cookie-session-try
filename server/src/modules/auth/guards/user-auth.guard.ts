import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'

@Injectable()
export class UserAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: any = context.switchToHttp().getRequest()
    return !!request.session?.userId
  }

}