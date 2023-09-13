import { Component, OnInit } from '@angular/core';
import { MyutilityservService } from '../myutilityserv.service';

@Component({
  selector: 'app-readdata',
  templateUrl: './readdata.component.html',
  styleUrls: ['./readdata.component.css']
})
export class ReaddataComponent implements OnInit {
constructor(private _myutil:MyutilityservService){}
mydata:any;
ngOnInit(): void {
  this._myutil.readmydata().subscribe((res)=>{
    this.mydata=res;
    console.log(res);
  })
}
}
