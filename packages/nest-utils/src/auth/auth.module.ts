import { DynamicModule, INestApplication, Logger, Module } from '@nestjs/common';
import { AUTH_OPTIONS_KEY, AuthGuard, defaultAuthOptions, type AuthOptions } from '../main';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './providers/auth.service';
import { deepMerge } from '@spuxx/js-utils';
import { type ConfigParams } from 'express-openid-connect';
import { RequestHandler } from 'express';

/**
 * The authentication module. This module is responsible for handling authentication and
 * authorization. It is based on the `express-openid-connect` library and is intended
 * for use with an OIDC provider.
 * @example
 * // main.ts
 * import { AuthModule, AuthOptions } from '@nestjs-oidc/core';
 * import { auth } from "express-openid-connect";
 * const authConfig: AuthOptions = {
 *   // This is the minimum set of options you need to provide
 *   roles: {
 *     admin: "admin",
 *     user: "user",
 *     // ... more roles ...
 *   },
 *   oidc: {
 *     issuerBaseURL: 'https://example.com',
 *     baseURL: 'http://localhost:3000',
 *     clientID: 'client-id',
 *     clientSecret: 'client-secret',
 *     secret: 'session-secret',
 *   }
 * }
 * await AuthModule.bootstrap(app, auth, authConfig);
 *
 * // app.module.ts
 * import { AuthModule } from '@nestjs-oidc/core';
 * ＠Module({
 *   imports: [AuthModule.forRoot(authConfig)],
 * })
 * export class AppModule {}
 */
@Module({})
export class AuthModule {
  /**
   * Bootstraps authentication. This must be called during application bootstrapping.
   * @param app The Nest application instance.
   * @param auth The `auth` middleware function provided by `express-openid-connect`.
   * @param options The authentication options.
   */
  static async bootstrap(
    app: INestApplication,
    auth: (params?: ConfigParams) => RequestHandler,
    options: AuthOptions,
  ) {
    const mergedOptions = this.mergeOptionsWithDefaultValues(options);
    const { disable, oidc } = mergedOptions;
    if (disable) {
      Logger.warn('Authentication is disabled. All routes will be accessible.', AuthModule.name);
      return;
    }
    app.use(auth(oidc));
    Logger.log(
      `Authentication is enabled and will be handled by issuer at '${oidc.issuerBaseURL}'.`,
      AuthModule.name,
    );
  }

  static forRoot(options: AuthOptions): DynamicModule {
    return {
      global: true,
      module: AuthModule,
      controllers: [AuthController],
      providers: [
        {
          provide: AUTH_OPTIONS_KEY,
          useValue: this.mergeOptionsWithDefaultValues(options),
        },
        AuthService,
        AuthGuard,
      ],
      exports: [AuthService, AuthGuard],
    };
  }

  static mergeOptionsWithDefaultValues(options: AuthOptions) {
    const mergedOptions = deepMerge(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      defaultAuthOptions as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options as any,
    ) as unknown as AuthOptions;
    return mergedOptions;
  }
}
