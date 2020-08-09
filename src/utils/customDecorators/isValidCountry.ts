import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
  ValidationOptions
} from 'class-validator';
import dataService from '../../services/dataService';

@ValidatorConstraint({ async: true })
class IsValidCountryFn implements ValidatorConstraintInterface {
  async validate(country: string) {
    // access the data service
    const data = new dataService()
    // Get all the countries
    let countries = await data.getCountries()

    // Lowercase the countries
    countries = countries.map((u: string) => u.toLowerCase())

    // Compare to the full country list
    if (countries.includes(country.toLocaleLowerCase())) return true
    return false
  }
}

export default function IsValidCountry(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidCountryFn,
    });
  };
}
