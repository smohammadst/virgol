import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export function TypeOrmConfig(): TypeOrmModuleOptions {
  const { DATABASE_URL } = process.env;
  
  return {
    type: "postgres",
    url: DATABASE_URL,
    autoLoadEntities: false,
    synchronize: false,
    entities: [
      "dist/**/**/**/*.entity{.ts,.js}",
      "dist/**/**/*.entity{.ts,.js}",
    ]
  };
}