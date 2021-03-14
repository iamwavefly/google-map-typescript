import faker from 'faker';
import { mapRule } from './customMap';

export class Company implements mapRule {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
      <h2>Company name is ${this.companyName}</h2>
      <p>Catch phrase is ${this.catchPhrase}</p>
    `;
  }
}
