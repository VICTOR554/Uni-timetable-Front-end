import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentPipe'
})
export class MomentPipePipe implements PipeTransform {

  transform(date: number, format: string = 'DDD DD MMM YYYY hh:mm A'): any {
    // console.log('piiipe', moment.unix(date).format(format));
    return moment.unix(date).format(format);
  }

}
