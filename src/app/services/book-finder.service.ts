import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import  { Observable, throwError } from 'rxjs';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';

/* const httpOptions = {
    header: new HttpHeaders({
        'Authorization'
    })
} */
@Injectable({
    providedIn: 'root'
})
export class BookFinderService{

    constructor(private httpclient: HttpClient){}

    getBooks(search): Observable<any>{

        console.log(search);
        const api = "https://www.googleapis.com/books/v1/volumes?q="+search;
        return this.httpclient.get<any>(api).pipe(catchError(this.handleError));

    }

    handleError(error){
        return throwError(error.message);
    }
}