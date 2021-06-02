import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getDocumentList(): any {
    const promise = new Promise((resolve, reject) => {
      return this.http.get('./assets/data.json')
      .toPromise()
      .then(
        jsonData => { // Success
          resolve(jsonData);
        },
        error => { // Error
          console.log('Error in fetching the list');
          reject(error);
        }
      );
    });
    return promise;
  }
}
