import { Component, OnInit } from '@angular/core';
import { RootObject } from '../file';
import { postdata } from './utility';
import { Form} from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServicesService } from '../services.service';
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  mal_id!: number;
  a!:any;
  b!:postdata;
 

  constructor(private servicesService: ServicesService,public dialog: MatDialog,private router: Router) {}
  
  ngOnInit(){
    
      this.mal_id=this.servicesService.getter();
      console.log(this.mal_id);
      this.servicesService.getelementbyid(this.mal_id).subscribe((data)=>
      {
             this.a=data.data;
           //  console.log(this.a);
      })
    };
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
  
//  let selectElement:any = document.querySelector('#inputState');
//  let output = selectElement.value;
  
//   this.b.email=email;
//   this.b.mobile=number;
//   this.b.name=name;
//   this.b.option=output;
//   console.log(this.b);
  this.servicesService.postingsetter(data).subscribe((data)=>
  {
    // console.log(data);
    this.router.navigate(['/display'])  ;
  });
  
    
}
onsubmit()
{
 // this.router.navigate(['/display'])  ;
}

// openDialog() {
//   this.dialog.open(DialogComponent, {
//     data: {
//       animal: 'panda',
//     },
//   });
// }


}
