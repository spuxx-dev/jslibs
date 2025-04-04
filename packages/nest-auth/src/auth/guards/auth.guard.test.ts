import { describe, beforeEach, it, expect } from 'vitest';
import { AuthGuard } from './auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Supertest, TestContainer } from '@spuxx/nest-testing';
import { Roles } from '../decorators/roles.decorator';
import { SessionResource } from '../resources/session.resource';
import { AuthModule } from '../auth.module';

const AuthRole = {
  Admin: 'admin',
  User: 'user',
} as const;
type AuthRole = (typeof AuthRole)[keyof typeof AuthRole];

describe('AuthGuard', () => {
  describe('Authentication disabled', () => {
    let supertest: Supertest;

    @Controller()
    class TestController {
      @Get('requiresAuthentication')
      @UseGuards(AuthGuard)
      requiresAuthentication() {}

      @Get('requiresAuthorization')
      @UseGuards(AuthGuard)
      @Roles(AuthRole.User)
      requiresAuthorization() {}
    }

    beforeEach(async () => {
      const container = await TestContainer.create({
        imports: [AuthModule.forRoot({ disable: true })],
        controllers: [TestController],
        enableEndToEnd: true,
      });
      supertest = container.supertest;
    });

    it('should allow the request to pass without authentication', async () => {
      const response = await supertest.get('/requiresAuthentication');
      expect(response.statusCode).toBe(200);
    });

    it('should allow the request to pass without authorization', async () => {
      const response = await supertest.get('/requiresAuthorization');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('Authentication', () => {
    let supertest: Supertest;

    @Controller()
    class TestController {
      @Get('protected')
      @UseGuards(AuthGuard)
      protected() {}

      @Get('unprotected')
      unprotected() {}
    }

    beforeEach(async () => {
      const container = await TestContainer.create({
        imports: [
          AuthModule.forRoot({
            roles: AuthRole,
          }),
        ],
        controllers: [TestController],
        enableEndToEnd: true,
      });
      supertest = container.supertest;
    });

    it('should deny an unauthenticated request to the protected route', async () => {
      const response = await supertest.get('/protected');
      expect(response.statusCode).toBe(401);
    });

    it('should allow an authenticated request to the protected route', async () => {
      const response = await supertest.get('/protected', {
        session: {
          sub: '123',
          name: 'John Deer',
          groups: ['user'],
        },
      });
      expect(response.statusCode).toBe(200);
    });

    it('should allow an unauthenticated request to the unprotected route', async () => {
      const response = await supertest.get('/unprotected');
      expect(response.statusCode).toBe(200);
    });

    describe('Authorization', () => {
      let supertest: Supertest;

      @Controller()
      class TestController {
        @Get('admin')
        @UseGuards(AuthGuard)
        @Roles(AuthRole.Admin)
        admin() {}

        @Get('user')
        @UseGuards(AuthGuard)
        @Roles(AuthRole.User)
        user() {}

        @Get('all')
        @UseGuards(AuthGuard)
        @Roles(AuthRole.Admin, AuthRole.User)
        all() {}
      }

      beforeEach(async () => {
        const container = await TestContainer.create({
          imports: [
            AuthModule.forRoot({
              roles: AuthRole,
            }),
          ],
          controllers: [TestController],
          enableEndToEnd: true,
        });
        supertest = container.supertest;
      });

      it('should allow an authorized request to the admin route', async () => {
        const response = await supertest.get('/admin', {
          session: {
            sub: '123',
            groups: ['admin'],
          },
        });
        expect(response.statusCode).toBe(200);
      });

      it('should deny an unauthorized request to the admin route', async () => {
        const response = await supertest.get('/admin', {
          session: {
            sub: '123',
            groups: ['user'],
          },
        });
        expect(response.statusCode).toBe(403);
      });

      it('should allow an authorized request to the user route', async () => {
        const response = await supertest.get('/user', {
          session: {
            sub: '123',
            groups: ['user'],
          },
        });
        expect(response.statusCode).toBe(200);
      });

      it('should deny an unauthorized request to the user route (no roles)', async () => {
        const response = await supertest.get('/user', {
          session: {
            sub: '123',
            groups: [],
          },
        });
        expect(response.statusCode).toBe(403);
      });

      it('should deny an unauthorized request to the user route (unrelated roles)', async () => {
        const response = await supertest.get('/user', {
          session: {
            sub: '123',
            groups: ['completely-different-application'],
          },
        });
        expect(response.statusCode).toBe(403);
      });

      it('should allow an authorized request to the all route', async () => {
        const response = await supertest.get('/all', {
          session: {
            sub: '123',
            groups: ['user', 'admin'],
          },
        });
        expect(response.statusCode).toBe(200);
      });

      it("should deny an unauthorized request to the all route (only 'user' role)", async () => {
        const response = await supertest.get('/all', {
          session: {
            sub: '123',
            groups: ['user'],
          },
        });
        expect(response.statusCode).toBe(403);
      });

      it('should be able process a roles property on the top level', async () => {
        const response = await supertest.get('/user', {
          session: {
            sub: '123',
            groups: ['user'],
          } as unknown as SessionResource,
        });
        expect(response.statusCode).toBe(200);
      });

      it('should fall back to realm_access.roles if groups claim is not present', async () => {
        const response = await supertest.get('/user', {
          session: {
            sub: '123',
            realm_access: {
              roles: ['user'],
            },
          } as unknown as SessionResource,
        });
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
