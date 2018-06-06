export class Usuario{
  nombre: string
  apellido: string
  email: string
  public esAdmin: boolean

  constructor(nombre:string, apellido:string, email:string, esAdmin:boolean){
    this.nombre = nombre;
    this.apellido= apellido;
    this.email= email;
    this.esAdmin= esAdmin;
  }

  static crearDesdeJson(json:any): Usuario{
    const usuario = new Usuario(json.nombre, json.apellido, json.email,json.esAdmin)
    return usuario;
  }


}
