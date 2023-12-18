import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _client:HttpClient) 
  { 

  }

  public get() : Observable<content[]>
  {
    return this._client.get<content[]>('https://localhost:7027/values');
  }

  public post(myvalue:string) : Observable<content>
  {
    return this._client.post<content>('https://localhost:7027/values', { value : myvalue });
  }
}
