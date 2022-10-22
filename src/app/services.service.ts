import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { RootObject } from './file';
import { postdata } from './details/utility';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseURLMovies: string='https://api.jikan.moe/v4/anime';
  baseurl2:string='https://634e301bf34e1ed826851b43.mockapi.io/m1/data';
  mal_id!: number;
  editid:any;
  constructor(private httpClient: HttpClient) { }

//   ngOnInit(){
//  this. getAllDat();
//   }
  
setter(id:number)
{
 // console.log(id);
  this.mal_id=id;
}
setterforedit(id:any)
{
this.editid=id;
}
getterforedit()
{
  return this.editid;
}
getter()
{
  return this.mal_id;
}
getAllDat(): Observable<RootObject> {
    
    return this.httpClient
      .get<RootObject>(this.baseURLMovies)
      .pipe(retry(1), catchError(this.handleError));
}
getelementbyid(id:number): Observable<any> {
    
  return this.httpClient
    .get<any>(`${this.baseURLMovies}/${id}`)
    .pipe(retry(1), catchError(this.handleError));
}
getformdata():Observable<any>
{
  return this.httpClient
      .get<any>(this.baseurl2)
      .pipe(retry(1), catchError(this.handleError));
}
putrequest(id:any,body:any):Observable<any>
{
  return this.httpClient
  .put<any>(`${this.baseurl2}/${id}`,body)
  .pipe(retry(1), catchError(this.handleError));
}
postingsetter(body:any):Observable<any>
{
 // console.log(body);
 // console.log("hi");
  return this.httpClient
  .post<any>(this.baseurl2,body)
 .pipe(retry(1), catchError(this.handleError));
}
handleError(err: any) {
    return throwError(() => {
      'something went wrong';
    });
  }
}
