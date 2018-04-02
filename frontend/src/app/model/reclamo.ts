
import {TipoDeReclamo} from "./tipoDeReclamo";

export class Reclamo{
  public detalle: string;
  public tipoDeReclamo: TipoDeReclamo;

  public set setTipoDeReclamo (tipo: TipoDeReclamo){
    this.tipoDeReclamo = tipo
  }

  public get getTipoDeReclamo():TipoDeReclamo{
    return this.tipoDeReclamo
  }

  constructor(msj: string){
    this.detalle = msj;
  }
}

