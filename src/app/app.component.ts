import { Component } from '@angular/core';
import { RootObject } from './file';

import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movticket';
//   a:any;
// //   a=[{name:"Titanic",image:"https://image.tmdb.org/t/p/original/jOoGga5UZ5sdYE94ogcjjHfsWaK.jpg"
// //   ,tickets:20},
// //   {name:"Iron Man 3",image:"https://th.bing.com/th/id/OIP.vF5aKoEQk69g_zZO3EteCgAAAA?pid=ImgDet&rs=1",tickets:20},
// //   {name:"Pirates Of Carribbean",image:"https://www.boredart.com/wp-content/uploads/2015/01/famous-movie-posters-of-All-time-Hollywood-28.jpg",
// // tickets:30},
// // {name:"Kissing Booth", image:"https://th.bing.com/th/id/OIP.pN6BwuHGfBSXDpgR5nH4FwHaK9?pid=ImgDet&rs=1",
// // tickets:40}
// // ];
// constructor(private servicesService: ServicesService) {}
  
ngOnInit(){}
// this.servicesService.getAllDat().subscribe((data:RootObject) => {
//  // 
//  this.a=data.data;
//  console.log(data.data);
// })};
}