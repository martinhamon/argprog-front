import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL, FILE_URL } from '../globals';

const URL = 'http://localhost:8080/uploadFile';
@Injectable({
  providedIn: 'root'
})
export class ImageuploadService {

  constructor(private http : HttpClient) { }


uploadImage(file :FormData):Observable <any> {

  return this.http.post(API_URL,file)
  /*return this.http.post(FILE_URL,file,{
    reportProgress : true,
    observe : 'events'

  })*/
}

}
