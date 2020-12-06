import { Citizen } from './citizen';
import { Qrcode } from './qrcode';

export class Scan {
    id : string = "";
    citizen : Citizen = new Citizen();
    qrCode : Qrcode = new Qrcode();
}
