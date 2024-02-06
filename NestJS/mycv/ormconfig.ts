import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'sqlite',
  synchronize: false,
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(config, {
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(config, {
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    Object.assign(config, {
      database: 'production.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  default:
    throw new Error('unknown environment');
}

export = config;
