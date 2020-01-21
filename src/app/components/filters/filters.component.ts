import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Language, Product, Resultdado } from 'src/app/models/Product';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() showConter = 0;
  @Input() languages: Array<Language>;
  @Input() avatarsNumber: Array<number>;
  @Input() countries: Array<string>;
  @Input() availableAges: Array<string>;
  @Input() productos: Array<Product> = [];
  @Input() productosResults: Array<Product> = [];
  @Output() filteredResults = new EventEmitter<Resultdado>();
  tags: Array<string> = [];
  toFilters = {
    language: { value: null, tag: '' },
    countries: { value: null, tag: '' },
    avatarNumber: { value: null, tag: '' },
    availableAge: { value: null, tag: '' },
  };

  constructor() {
  }

  ngOnInit() {
  }

  onFilter(type = null, value) {
    if (type != null) {
      this.toFilters[type].value = value;
    }
    for (const key in this.toFilters) {
      if (this.toFilters.hasOwnProperty(key)) {
        const element = this.toFilters[key];
        if (key === 'language' && type === key && element.value != null) {
          // asignando el tag interno
          this.toFilters.language.tag = value.name;
          // refrescando loas tags
          this.tagRefresh();
          this.onFilterByValue(element.value);
          return;
        } else if (key === 'countries' && type === key && element.value != null) {
          // asignando el tag interno

          this.toFilters.countries.tag = value;
          // refrescando loas tags
          this.tagRefresh();
          this.onFilterByValue(value);

          return;
        } else if (key === 'avatarNumber' && type === key && element.value != null) {

          this.toFilters.avatarNumber.tag = '😎 ' + value;
          // // refrescando loas tags
          this.tagRefresh();
          this.onFilterByNumber(value);
          return;
        } else if (key === 'availableAge' && type === key && element.value != null) {

          this.toFilters.availableAge.tag = value;
          // // refrescando loas tags
          this.tagRefresh();
          this.onFilterByValue(value);
          return;
        }

      }
    }
    
    const resultdado = new Resultdado();
    resultdado.resultados = this.productos;
    resultdado.clear = true;
    resultdado.tags = this.tags;
    this.filteredResults.emit(resultdado);
    return;
  }

  // elimina tags de this.tag y this.toFilters[].tag
  deleteTag(tag) {
    // eliminar del obj toFilters
    for (const key in this.toFilters) {
      if (this.toFilters.hasOwnProperty(key)) {
        const element = this.toFilters[key];
        if (element.tag === tag) {
          element.tag = '';
          element.value = null;
        }
      }
    }
    // eliminar del arry de tags
    this.removeItemA(tag, this.tags);
    // filtrar
    this.onFilter(null, '');


  }

  // Actualiza los tag desde this.toFilters[].tag
  tagRefresh() {
    this.tags = [];
    for (const key in this.toFilters) {
      if (this.toFilters.hasOwnProperty(key)) {
        const element = this.toFilters[key];
        if (element.tag !== '') {
          this.tags.push(element.tag);
        }
      }
    }
  }

  // Filtra por un valor destro de un multinivel
  onFilterByValue(search) {
    const res = this.productosResults.filter(p => {
      const fIndex = JSON.stringify(p).indexOf(JSON.stringify(search));
      return fIndex > -1;
    });
    const resultdado = new Resultdado();
    resultdado.resultados = res;
    resultdado.clear = false;
    resultdado.tags = this.tags;
    this.filteredResults.emit(resultdado);
  }
  // filtra por un numero en una seccion
  onFilterByNumber(search) {
    const res = this.productosResults.filter(p => {
      const prm = p.personalizationParams;
      if (prm != null) {
        return prm.avatars.length === search;
      }
      return false;
    });
    const resultdado = new Resultdado();
    resultdado.resultados = res;
    resultdado.clear = false;
    resultdado.tags = this.tags;
    this.filteredResults.emit(resultdado);
  }


  removeItemA(item, array: Array<any>) {
    const index = array.indexOf(item);
    if (index > -1) {
      return array.splice(index, 1);
    }
  }

  updateFilter(item, array: Array<any>) {
    const index = array.indexOf(item);
    if (index > -1) {
      return array.splice(index, 1);
    }
  }

}
