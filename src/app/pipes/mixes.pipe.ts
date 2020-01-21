import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removestr'
})
export class RemoveStr implements PipeTransform {

  transform(value: string, search: string): any {
    return value.replace(search, '');
  }

}

@Pipe({
  name: 'strcutinverse'
})
export class StrCutInverse implements PipeTransform {

  transform(value: string, position?: number): any {

    if (value !== '') {
      return value.slice(position);
    }

    return value;
  }

}
