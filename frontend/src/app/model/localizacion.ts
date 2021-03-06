export class Localizacion {
    public latitud:string;
    public longitud:string;
    public direccionFisica:string;

    public set setLatitud(lat:string){
        this.latitud = lat
    }

   public set setLongitud(long:string){
        this.longitud = long
    }

    public set setDireccionFisica(dir:string){
        this.direccionFisica = dir
    }

    constructor(lat:string, lng:string, dirFisica: string) {
        this.latitud=lat;
        this.longitud=lng;
        this.direccionFisica = dirFisica;
    }

    static crearDesdeJson(json:any): Localizacion{
     const localizacion = new Localizacion(json.latitud, json.longitud, json.direccionFisica)
      return localizacion
    }
}
