import { Component } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
title='Saludos';
imageWidth:number=100;
imageMargi:number=2;
muestraImg:boolean=false;
listFilter:string='';
showImage():void{
  this.muestraImg=!this.muestraImg;
}
productos:Producto[]=[
  {
    "productoId":1,
    "Modelo":'Sentra',
    "Descripcion":"4 puertas familiar",
    "year":"febrero 3 2022",
    "precio": 2000,
    "marca":"NISSAN",
    "Color":"Morado",
    "imagenURL":"https://i.ytimg.com/vi/xOHLYb16KIs/maxresdefault.jpg"
  },
  {
    "productoId":2,
    "Modelo":'A4',
    "Descripcion":"2 puertas",
    "year":"MARZO 3 2023",
    "precio": 30000,
    "marca":"AUDI",
    "Color":"Blanco",
    "imagenURL":"https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzE1Njc5L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzE3NTM5MDkxNzUxLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjU0MCwiaGVpZ2h0IjozMTB9fX0="
  },
  {
    "productoId":3,
    "Modelo":'Rio',
    "Descripcion":"4 puertas familiar",
    "year":"Agosto 3 2022",
    "precio": 60000,
    "marca":"KIA",
    "Color":"Azul",
    "imagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSIdcnRHtatneXdKeMFfGU65i0ZqDoZgpTnQ&s"
  },
]

}
