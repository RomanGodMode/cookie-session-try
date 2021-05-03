import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './modules/db/database.module'

const environment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
