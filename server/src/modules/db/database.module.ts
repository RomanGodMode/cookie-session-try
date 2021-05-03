import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        port: 5432,
        host: 'db',
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: 'postgres',
        entities: ['dist/**/*.entity{.js,.ts}'],
        synchronize: true
      }),
      inject: [ConfigService]
    })
  ]
})
export class DatabaseModule {
}
