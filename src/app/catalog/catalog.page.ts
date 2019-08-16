import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {

  categories = [];
  products = [];



  constructor() { }

  ngOnInit() {
    this.getCategories();
  }
  
  getCategories() {
	this.categories = [{
      'imagen': 'assets/img/vaca1-01.jpg',
    },{
      'imagen': 'assets/img/vaca2-01.jpg',
    },{
      'imagen': 'assets/img/vaca3-01.jpg',
	}];
  }
  
  getProducts() {
	this.products = [{
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
	  'title': 'Manitoba',
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
    },{
      'title': 'lola2',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
    },{
	  'title': 'SB Tamaxxo',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
	},{
	  'title': 'SB Tamaxxo',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
	},{
	  'title': 'SB Tamaxxo',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
	},{
	  'title': 'SB Tamaxxo',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
	},{
	  'title': 'SB Tamaxxo',
      'category': {
	   'title': 'Brahman',
	   'type': 'Carne',
	  },
	  'local': {
	    "name": "Hacienda San José",
	    "city": "La Primavera",
	    "department": "Vichada"
	  },
      'imagen': 'https://i.pinimg.com/originals/29/ed/1b/29ed1bdb0cb5044c1db66060f63a63c4.jpg',
	}];
  }
  
}
