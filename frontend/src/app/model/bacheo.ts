import {TipoDeReclamo} from "./tipoDeReclamo";

export class Bacheo extends TipoDeReclamo{
    public hundimientoDelPavimento = false;
    
    constructor(type:string){
        super(type);
      }
}