import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerName'
})
export class PlayerNamePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return (value + '2');
  }

}
