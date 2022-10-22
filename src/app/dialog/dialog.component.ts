import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  editid:any;
  constructor(private servicesService: ServicesService,private router: Router) {}

  ngOnInit(): void {
  //  this.editid=this.servicesService.getterforedit();
    this.editid=this.servicesService.getterforedit();
  }
 setvalue(data:any)
 {
   
  if(data.email.trim()==="")
  {
    alert("Enter valid mail");
    return;
  }
  if(data.name.trim()==="")
  {
    alert("Enter valid name");
    return;
  }
  if(data.mobile.trim()==="" || data.mobile.length<10)
  {
    alert("Enter valid number ");
    return;
  }
  if(data.option.trim()==="")
  {
    alert("Enter show timing");
    return;
  }
  if(Number(data.seats)<0)
  {
   // console.log( Number(data.seats));
    alert("Enter valid seats");
    return;
  }
  console.log(this.editid);
  this.servicesService.putrequest( this.editid, data).subscribe((data)=>
  {
    this.router.navigate(['/display'])  ;
      console.log(data);
  });
 }

}
