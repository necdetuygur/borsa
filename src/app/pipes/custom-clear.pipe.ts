import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customClear',
})
export class CustomClearPipe implements PipeTransform {
  transform(value: any): unknown {
    return value === '0' || value === 0 || value === '-' ? 'YOK' : value;
  }
}
