import { ArgsType, Field } from "type-graphql";
import { IsString, Length } from "class-validator";

@ArgsType()

export default class CountryNamesInterface {
  @Field({ nullable: true })
  @IsString()
  @Length(3, undefined, { message: 'The country name should contain at least 3 characters' })
  name: string
}