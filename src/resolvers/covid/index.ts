import { Resolver, Query, Args } from "type-graphql";
import { ApolloError } from "apollo-server-express";
import dataService from "../../services/dataService";
import CountryStatisticsInterface from "./interfaces/countryStatisticsInterface";
import { Country } from "../../services/dataService/types";
import CountryNamesInterface from "./interfaces/countryNamesInterface";

@Resolver()
export default class CovidResolvers {
  @Query(() => [Country])
  async countryStatistics (
    @Args() { name }: CountryStatisticsInterface
  ): Promise<Country[]> {
    try {
      const data = new dataService()
      return data.getStatistics(name)
    } catch (e) {
      throw new ApolloError(e)
    }
  }

  @Query(() => [String])
  async countryNames (
    @Args() { name }: CountryNamesInterface
  ): Promise<String[]> {
    try {
      const data = new dataService()
      return data.getCountries(name)
    } catch (e) {
      throw new ApolloError(e)
    }
  }
}