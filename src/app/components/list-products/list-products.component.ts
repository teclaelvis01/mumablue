import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product, Language, Avatars, Resultdado } from '../../models/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  providers: [ProductsService]
})
export class ListProductsComponent implements OnInit {
  productos: Array<Product> = [];
  productosResults: Array<Product> = [];
  languages: Array<Language> = [];
  avatars: Array<Avatars> = [];
  avatarsNumber: Array<number> = [];
  availableAges: Array<string> = [];
  countries: Array<string> = [];
  isLoading = true;
  constructor(private productService: ProductsService) {

  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res) => {
      this.isLoading = false;
      this.productos = res['hydra:member'];
      this.productosResults = res['hydra:member'];
      this.settings(this.productosResults);

    },
      (err) => {
        this.isLoading = false;
        console.log('e', err);
      }

    );
  }

  settings(productos: Array<Product>) {
    productos.forEach(p => {
      // extrayendo el idioma
      const variations = p.variations;
      variations.forEach(variation => {
        // cargando el listado de languages
        this.languages.push(variation.language);
      });

      const persPrams = p.personalizationParams;
      if (persPrams != null) {

        // llenando el numero de personanjes
        this.avatarsNumber.push(persPrams.avatars.length);

        // availablesAges edades permitidas
        persPrams.avatars.forEach(avatar => {
          this.avatars.push(avatar);
          this.availableAges = this.availableAges.concat(avatar.availableAges);
        });

      }

      // Extrayendo los paises
      this.countries = this.countries.concat(p.countries);

    });


    this.availableAges = this.productService.arrayUnique(this.availableAges);
    this.languages = this.productService.removeDuplicatesObj(this.languages, 'code');
    this.avatarsNumber = this.productService.sort(this.productService.arrayUnique(this.avatarsNumber));
    this.countries = this.productService.arrayUnique(this.countries);

  }


  onReulstFilter(result: Resultdado) {
    console.log('result', result);
    if (result.clear) {
      // aqui llega el array original
      this.productosResults = result.resultados;
      return;
    }

    this.productosResults = result.resultados;
  }


}
