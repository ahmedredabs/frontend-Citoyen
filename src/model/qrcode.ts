import { Phyisician } from './physician';
import {Location} from './location';

export class Qrcode {
  id: string = '';
  physician: Phyisician = new Phyisician();
  location: Location = new Location();
}
