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
      'title': 'Brahman',
	  'type': 'Carne',
      'imagen': 'https://i.ytimg.com/vi/TvMbFPM8la8/maxresdefault.jpg',
    },{
      'title': 'Charolais',
	  'type': 'Carne',
      'imagen': 'http://www.honduganado.com/wp-content/uploads/2015/01/bovins-charolais.jpg',
    },{
	  'title': 'Angus',
	  'type': 'Carne',
      'imagen': 'https://i.ytimg.com/vi/KC09RGA2-qM/hqdefault.jpg',
	},{
	  'title': 'Holstein',
	  'type': 'Leche',
      'imagen': 'https://storage.contextoganadero.com/s3fs-public/styles/noticias_one/public/ganaderia/field_image/2018-08/foto_holstein_-autorizada.jpg?itok=QC5Evv0H',
	},{
	  'title': 'Brown Swiss',
	  'type': 'Leche',
      'imagen': 'http://www.perulactea.com/wp-content/uploads/2018/05/Asociaci%C3%B3n-Brown-Swiss-del-Per%C3%BA.gif',
	},{
	  'title': 'Jersey',
	  'type': 'Leche',
      'imagen': 'https://i.ytimg.com/vi/W3UDEY5_7L0/hqdefault.jpg',
	},{
	  'title': 'Simmental',
	  'type': 'Doble Proposito',
      'imagen': 'https://zoovetesmipasion.com/wp-content/uploads/2017/07/simmental05-1.jpg',
	},{
	  'title': 'Aberdeen',
	  'type': 'Doble Proposito',
      'imagen': 'https://i.ytimg.com/vi/OtO-4JVU1RQ/maxresdefault.jpg',
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
