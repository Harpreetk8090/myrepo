import { Component,OnInit } from '@angular/core';
import { MyutilityservService } from '../myutilityserv.service';
import { newinterface } from '../newinterface';


@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.css']
})
export class MyproductComponent implements OnInit {
mydata:newinterface[]=[];
searchdata:string="";
  constructor(private _myutil:MyutilityservService){}
  ngOnInit():void{
this._myutil.getData().subscribe((res:newinterface[])=>{
  this.mydata=res;
  console.log(res);
  console.log(this.mydata)
})
 
  
  }
 
    }
