import { InputType, PartialType } from '@nestjs/graphql';
import { CreateStoryboardInput } from './create-storyboard.input';

@InputType()
export class UpdateStoryboardInput extends PartialType(CreateStoryboardInput) {}
