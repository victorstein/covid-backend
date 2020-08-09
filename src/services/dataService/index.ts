import axios, { AxiosRequestConfig } from 'axios'
import config from '../../config'
import { Country } from './types'

export default class dataService {
  apiKey?: string
  url: string

  constructor (apiKey?: string) {
    const key = apiKey || config.apikey
    if (!key) throw new Error('An API Key is need in the constructor or ENV file')
    this.apiKey = key
    this.url = 'https://covid-193.p.rapidapi.com'
  }

  async getStatistics (
    country?: string
  ): Promise<Country[]> {
    try {
      // Create a config object
      const config: AxiosRequestConfig = {
        url: `${this.url}/statistics`,
        headers: { 'x-rapidapi-key': this.apiKey },
      }

      // Add a country param if needed
      if (country) { config.params = { country } }

      // Fetch the data
      const { data } = await axios(config)

      // return the data
      return data.response
    } catch (e) {
      throw new Error(e)
    }
  }

  async getCountries (
    country?: string
  ) {
    try {
      // Create a config object
      const config: AxiosRequestConfig = {
        url: `${this.url}/countries`,
        headers: { 'x-rapidapi-key': this.apiKey },
      }

      // Add a country param if needed
      if (country) { config.params = { search: country } }

      // Fetch the data
      const { data } = await axios(config)

      // return the data
      return data.response
    } catch (e) {
      throw new Error(e)
    }
  }
}