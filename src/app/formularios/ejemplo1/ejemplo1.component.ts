import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnInit{
  formulario!:FormGroup;
  resultado!:number;
  constructor(){}
  ngOnInit(): void {
    this.formulario = new FormGroup({
    numero1: new FormControl('',Validators.required),
    numero2: new FormControl('',Validators.required)
  });
  }
  multNumeros():void{
    let num1=this.formulario.get('numero1')?.value;
    let num2=this.formulario.get('numero2')?.value;
    this.resultado=num1*num2;
  }
}
