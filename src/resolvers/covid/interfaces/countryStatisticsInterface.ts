import { ArgsType, Field } from "type-graphql";
import { IsString } from "class-validator";
import isValidCountry from '../../../utils/customDecorators/isValidCountry'

@ArgsType()

export default class CountryStatisticsInterface {
  @Field()
  @IsString()
  @isValidCountry({ message: 'The provided country is invalid' })
  name: string
}