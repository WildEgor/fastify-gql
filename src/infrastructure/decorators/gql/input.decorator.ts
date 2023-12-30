import { Args } from '@nestjs/graphql';

export const Input = (field = 'input'): ParameterDecorator => Args(field);
