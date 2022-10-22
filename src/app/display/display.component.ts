import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postdata } from '../details/utility';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  displayedColumns: string[] = ['S.No', 'Name', 'Email','Seats', 'Mobile','Action'];
  dataSource!:any;
  constructor(private servicesService: ServicesService,private router: Router) {}
  ngOnInit() {
    this.servicesService.getformdata().subscribe((data:any)=>
    {
      //console.log(data);
      this.dataSource=data;
    })
  }
  
   
onedit(id:any)
{
  console.log("onedit",id);
   
   this.servicesService.setterforedit(id);
   this.router.navigate(['/dialog'])  ;
}
}
