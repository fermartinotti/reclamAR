
import {TipoDeReclamo} from "./tipoDeReclamo";
import { Localizacion } from "./localizacion";

export class Reclamo{
  public detalle: string;
  public tipoDeReclamo: TipoDeReclamo;
  public lugarDeIncidente:Localizacion;

  public get getTipoDeReclamo():TipoDeReclamo{
    return this.tipoDeReclamo
  }

  public set setTipoDeReclamo (tipo: TipoDeReclamo){
    this.tipoDeReclamo = tipo
  }

  public get getLugarDeIncidente():Localizacion{
    return this.lugarDeIncidente
  }
  
  public set setLugarDeIncidente(loc:Localizacion){
    this.lugarDeIncidente=loc;
  }
  
  constructor(msj: string){
    this.detalle = msj;
  }
}

