import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceVowels',
})
export class ReplaceVowelsPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replaceAll('a', '1')
      .replaceAll('e', '2')
      .replaceAll('i', '3')
      .replaceAll('o', '4')
      .replaceAll('u', '5');
  }
}
