import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/observable"
import "rxjs/add/operator/map"

@Injectable()
export class FoService {

  constructor(private http: HttpClient) { }

  getVersion() {
    return this.http.get('http://foaas.com/version').map(function(response) {
      console.log(response);
      return response;
    });
  }
}
