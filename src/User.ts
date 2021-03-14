import faker from 'faker';
import {mapRule} from './customMap'
export class User implements mapRule{
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
      <p>User name is ${this.name}</p>
    `;
  }
}
