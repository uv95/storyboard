import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'node:path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { UUIDType } from './graphql/scalars/uuid.type';
import { StoryboardModule } from './modules/storyboard/storyboard.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    StoryboardModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: 'UUID', useValue: UUIDType },
  ],
})
export class AppModule {}
