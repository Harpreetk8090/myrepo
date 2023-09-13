import { Pipe, PipeTransform } from '@angular/core';
import { newinterface } from '../newinterface';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value: newinterface[], searchdata: string): newinterface[] {
    console.log(value);
    return value.filter(function(search:newinterface){
    //  return search.title.indexOf(searchdata)>-1
    return search.title.includes(searchdata)
    //  return JSON.stringify(search.id).includes(searchdata)
 
    })
  }

}
