import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecetarioResponse } from '../interfaces/recetario';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class RecetarioService {

    constructor(private http: HttpClient) { }
    
    getData(): Observable<RecetarioResponse> {
        return this.http.get<RecetarioResponse>(`${base_url}/recetario`)
    }
}
