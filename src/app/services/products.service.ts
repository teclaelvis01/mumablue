import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProductsService {


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.endPoint + 'products');
  }

  removeDuplicatesObj(originalArray, prop) {
    const newArray = [];
    const lookupObject = {};
    originalArray.forEach((v, i) => {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    });
    for (const key in lookupObject) {
      if (lookupObject.hasOwnProperty(key)) {
        const element = lookupObject[key];
        newArray.push(element);
      }
    }
    return newArray;
  }

  arrayUnique(originalArray) {
    return originalArray.filter((item, index) => {
      return originalArray.indexOf(item) >= index;
    });
  }

  sort(originalArray) {
    return originalArray.sort((a, b) => a - b);
  }

}
