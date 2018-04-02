import {TipoDeReclamo} from "./tipoDeReclamo";

export class Luminaria extends TipoDeReclamo{
  public problemaPalo = false;
  public problemaFoco = false;

  constructor(type:string){
    super(type);
  }
}
