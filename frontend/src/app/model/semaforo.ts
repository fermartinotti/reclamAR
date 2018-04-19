import {TipoDeReclamo} from "./tipoDeReclamo";

export class Semaforo extends TipoDeReclamo{
    public problemaEstructura = false;
	public problemaMalFuncionamiento = false;
    public problemaNoFunciona = false;

    constructor(type:string){
        super(type);
      }
}
