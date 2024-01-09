import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(array: any[], key?: string, separator = ", "): string {
    if(!key) {
      return array
        .join(separator)
    }
    
    return array.reduce((acc, curr, idx) => {
      if (idx === 0)
        return curr[key];
      return `${acc} ${separator}${curr[key]}`
    }, "");
  }

}
