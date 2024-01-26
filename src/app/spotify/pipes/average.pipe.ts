import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(array: number[]): number {
    return Math.round(array.reduce((sum, curr) => sum+curr)/array.length);

  }

}
