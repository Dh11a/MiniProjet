import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dhia'
})
export class DhiaPipe implements PipeTransform {

  transform(value: string): string {
    return "**"+value.toLocaleUpperCase()+"**";
  }

}
