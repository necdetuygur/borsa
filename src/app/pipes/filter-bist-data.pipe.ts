import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBistData',
})
export class FilterBistDataPipe implements PipeTransform {
  transform(items: any[], f1: string): any {
    if (!items || !f1) {
      return items;
    }
    return items.filter(
      (item) =>
        item.Code.toLowerCase().includes(f1.toLowerCase()) ||
        item.Title.toLowerCase().includes(f1.toLowerCase()) ||
        item.City.toLowerCase().includes(f1.toLowerCase())
    );
  }
}
