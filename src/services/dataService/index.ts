import axios, { AxiosRequestConfig } from 'axios'
import config from '../../config'
import { Country } from './types'
import { HTML } from '../../utils/html'

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

      // Instanciate html class
      const html = new HTML()

      // Add a country param if needed
      if (country) { config.params = { country: html.encode(country) } }

      // Fetch the data
      const { data } = await axios(config)

      // Clean data for user
      const decodedData = data.response.map((country: Country) => {
        return { ...country, country: html.decode(country.country) }
      })

      // return the data
      return decodedData
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
      
      // Instanciate html class
      const html = new HTML()

      // Fetch the data
      const { data } = await axios(config)

      // Clean data for user
      const decodedData = data.response.map((country: string) => {
        return html.decode(country)
      })

      // return the data
      return decodedData
    } catch (e) {
      throw new Error(e)
    }
  }
}