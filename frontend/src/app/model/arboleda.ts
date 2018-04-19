import {TipoDeReclamo} from "./tipoDeReclamo";

export class Arboleda extends TipoDeReclamo{
    public problemaPoda = false;
    public problemaCaida = false;

    constructor(type:string){
        super(type);
      }
}