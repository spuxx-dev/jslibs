import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MappingModule } from '@spuxx/nest-utils';
import { EnvModule } from './env/env.module';
import { authConfig } from './auth/auth.config';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from '@spuxx/nest-auth';

@Module({
  imports: [EnvModule.register(), AuthModule.forRoot(authConfig), MappingModule, CatsModule],
  controllers: [AppController],
})
export class AppModule {}
