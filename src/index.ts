import { User } from './User';
import { Company } from './Company';
import { customMap } from './customMap';

const newMap = new customMap('map');
const newUSer = new User();
const newCompany = new Company();
newMap.mapLocation(newUSer);
newMap.mapLocation(newCompany);
