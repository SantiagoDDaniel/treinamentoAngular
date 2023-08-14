import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{

  products: Product [] = [
    {_id: '1', name: 'Curso de programação', category: 'front-end'}
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor(){
  }
  ngOnInit(): void {

  }

}
