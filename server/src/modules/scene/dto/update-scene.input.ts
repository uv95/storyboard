import { InputType, PartialType } from '@nestjs/graphql';
import { CreateSceneInput } from './create-scene.input';

@InputType()
export class UpdateSceneInput extends PartialType(CreateSceneInput) {}
