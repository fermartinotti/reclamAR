import {TipoDeReclamo} from "./tipoDeReclamo";

export class Luminaria extends TipoDeReclamo{
  public problemaPalo = false;
  public problemaFoco = false;

  constructor(){
    super()
  }
}
