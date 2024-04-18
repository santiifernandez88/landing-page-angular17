import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private _urlBase: string = 'https://fakestoreapi.com/products';
  
  
  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._urlBase);
  }

  getProduct(id: number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this._urlBase}/${id}`);
  }
}
