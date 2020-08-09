import { Resolver, Query } from "type-graphql";

@Resolver()
export default class CovidResolvers {
  @Query(() => String)
  recipes() {
    return 'World'
  }
}