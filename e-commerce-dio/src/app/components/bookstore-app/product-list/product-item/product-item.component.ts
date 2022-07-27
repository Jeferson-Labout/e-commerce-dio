import { Component, Input, OnInit,Pipe } from '@angular/core';
import { Book } from '../model/Book';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {


  url : string = "";

  @Input()
  livro!: Book;

  constructor() {

   }

  ngOnInit(): void {



  }

}
