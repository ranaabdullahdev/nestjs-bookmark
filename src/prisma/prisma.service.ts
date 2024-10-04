import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  async checkConnection() {
    try {
      await this.$connect();
      console.log(
        'Database connection established successfully',
      );
    } catch (error) {
      console.error(
        'Failed to connect to the database',
        error,
      );
    }
  }
}