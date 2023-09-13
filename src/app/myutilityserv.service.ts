import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map,filter, toArray } from 'rxjs';
import { newinterface } from './newinterface';
@Injectable({
  providedIn: 'root'
})
export class MyutilityservService {

  constructor(private _http:HttpClient) { }
getData():Observable<newinterface[]>{
return this._http.get<newinterface[]>('https://jsonplaceholder.typicode.com/posts').pipe(
  map((data:newinterface[])=> {
    return data.map(ele=>({
      id:ele.id,
      body:ele.body,
      title:ele.title,
      userId:ele.userId
    }))
  }),
  
)


 
}
readmydata():Observable<any>{
  return this._http.get<any>('https://raw.githubusercontent.com/jamtechdev/assingments-jsons/main/products-1Y-001.json')
}
}
