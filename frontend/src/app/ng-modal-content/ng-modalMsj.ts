import {Component} from "@angular/core";

@Component({
  selector: 'reclamo-sucess',
  template: 'sucess'
})

export class ReclamoSucessComponent{

}

@Component({
  selector: 'reclamo-errro',
  template: 'error'
})

export class ReclamoErrorComponent{

}

export const ReclamoMsjComponent =
  [ ReclamoSucessComponent, ReclamoErrorComponent];
