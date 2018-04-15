import {Directive, TemplateRef, ViewContainerRef} from "@angular/core";
import {Input} from "@angular/compiler/src/core";

@Directive({
  selector : 'msjModal'
})

export class onOpenMsjDirective{
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef){
  }

}
