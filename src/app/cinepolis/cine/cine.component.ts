import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
interface ResultadoCompra {
  total: number;  
  nombre: string;
  numeroBoletos: number;
}
@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  precioBoleto: number = 12;
  formulario!: FormGroup;
  resultado: ResultadoCompra | null = null;
  resultado2!:boolean;
  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      nBoletos: new FormControl('', Validators.required),
      nCompradores: new FormControl('', Validators.required),
      isCineco: new FormControl('', Validators.required),
    });
  }

  vende(): void {
    let nombre = this.formulario.get('nombre')?.value;
    let nBoletos = this.formulario.get('nBoletos')?.value;
    let isCineco = this.formulario.get('isCineco')?.value;
    let nCompradores = this.formulario.get('nCompradores')?.value;

    let totalFinal=0;
    let totalFinalCineco=0;
    let total = nBoletos * this.precioBoleto;
    let subtotal = nBoletos * this.precioBoleto;
    let boletosComprados = nBoletos;
    let boletosMaximo = nCompradores * 7;
    console.log("Boletos comprados",boletosComprados);
    console.log("Boletos Validacion",boletosMaximo);
    console.log("isCineco",isCineco);
    if (boletosMaximo>=boletosComprados) {
      
      if (nBoletos > 5) {
        total *= 0.15; 
        totalFinal= subtotal-total;
        if (isCineco=='si') {
          totalFinalCineco=totalFinal-(totalFinal * 0.10); 

          this.resultado = {
            total: totalFinalCineco,
            nombre: nombre,
            numeroBoletos: nBoletos};
            console.log(boletosComprados);
        }else{
        this.resultado = {
          total: totalFinal,
          nombre: nombre,
          numeroBoletos: nBoletos};
          console.log(boletosComprados);
        }
      } else if (nBoletos >= 3 && nBoletos <= 5) {
        totalFinal=total-(total * 0.10); 
        this.resultado = {
          total: totalFinal,
          nombre: nombre,
          numeroBoletos: nBoletos};
          console.log(boletosComprados);
        }else if (nBoletos<3) {
          totalFinal=total;
          if (isCineco=='si') {
            totalFinalCineco=totalFinal-(totalFinal * 0.10); 
  
            this.resultado = {
              total: totalFinalCineco,
              nombre: nombre,
              numeroBoletos: nBoletos};
              console.log(boletosComprados);
          }else{
          this.resultado = {
            total: totalFinal,
            nombre: nombre,
            numeroBoletos: nBoletos};
            console.log(boletosComprados);
          }
        }
      
  
      
      
      
    }else{
      this.resultado2 = true;
    }
    

  
    
    
  }
  
}
