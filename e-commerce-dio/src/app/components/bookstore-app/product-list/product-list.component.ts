import { Component, OnInit } from '@angular/core';
import { BooksSevice } from './product-list-component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  livros: any;
  bookService: BooksSevice;
  constructor(bookService: BooksSevice) {

    this.bookService = bookService
  }

  ngOnInit(): void {


    this.listar();
  }


  listar(){
    this.bookService.getBook().subscribe(data => { this.livros = data });
  
  }

}
