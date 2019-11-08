import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  onDataChanged: BehaviorSubject<any>;
  data: any = {
    campaigns: [],
    shotcuts: []
  };
  constructor(private http: HttpClient) {
    this.onDataChanged = new BehaviorSubject(this.data);
  }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('resolve');
    this.getHomeData();
  }

  getHomeData() {
    return new Promise((resolve, reject) => {
      this.http.get("../../assets/json/home.json").subscribe((res: any) => {
        this.onDataChanged.next(res.data);
        resolve(res.data);
      }, reject);
    })
  }
}
