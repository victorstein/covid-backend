import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Cases {
  @Field()
  new: string
  @Field()
  active: number
  @Field()
  critical: number
  @Field()
  recovered: number
  @Field()
  total: number
}

@ObjectType()
export class Deaths {
  @Field()
  new: string
  @Field()
  total: number
}

@ObjectType()
export class Tests {
  @Field({ nullable: true })
  total?: number
}

@ObjectType()
export class Country {
  @Field()
  country: string
  @Field()
  continent: string
  @Field()
  population: number  
  @Field()
  cases: Cases
  @Field()
  deaths: Deaths
  @Field()
  tests: Tests
  @Field()
  day: string
  @Field()
  time: string
}
