import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  nBoletos!:number;
  nombre!:string;
  isCineco!:boolean;
  nCompradores!:number;
  precioBoleto:number=12;
  formulario!:FormGroup;
  resultado!:number;
  constructor(){}
  ngOnInit(): void {
    this.formulario = new FormGroup({
    nombre: new FormControl('',Validators.required),
    nBoletos: new FormControl('',Validators.required),
    nCompradores: new FormControl('',Validators.required),
    isCineco : new FormControl('',Validators.required),
  });
  }

  vende():void{
    let nombre=this.formulario.get('nombre')?.value;
    let nBoletos=this.formulario.get('nBoletos')?.value;
    let isCineco=this.formulario.get('isCineco')?.value;
    let nCompradores=this.formulario.get('nCompradores')?.value;
    this.resultado=nBoletos*this.precioBoleto;
  }
}
