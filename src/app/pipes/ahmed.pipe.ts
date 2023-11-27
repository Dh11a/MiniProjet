import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ahmed'
})
export class AhmedPipe implements PipeTransform {

  transform(value: string): string {
    return value.replaceAll(' ','');
  }

}
