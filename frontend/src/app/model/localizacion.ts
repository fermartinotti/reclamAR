export class Localizacion {
    public latitud:string;
    public longitud:string;

    public set setLatitud(lat:string){
        this.latitud = lat
    }

   public set setLongitud(long:string){
        this.longitud = long
    }

    constructor(lat:string, lng:string) {
        this.latitud=lat;
        this.longitud=lng;
    }

    static crearDesdeJson(json:any): Localizacion{
     const localizacion = new Localizacion(json.latitud, json.longitud)
      return localizacion
    }
}
