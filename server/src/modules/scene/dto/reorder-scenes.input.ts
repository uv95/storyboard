import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { UUIDType } from 'src/graphql/scalars/uuid.type';

@InputType()
export class ReorderScenesInput {
  @Field(() => UUIDType)
  @IsNotEmpty()
  id: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  order: number;
}
