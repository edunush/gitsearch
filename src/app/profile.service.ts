import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;

  constructor(private http: HttpClient) { 

    console.log("service is now ready")
    this.username = 'edunush'; 
  }
  getProfileInfo(): Observable<any> {
    return this.http.get("https://api.github.com/users/edunush")
      .pipe(map(res => res));
  } 
  getProfileRepos(): Observable<any> {
    return this.http.get("https://api.github.com/users/edunush")
      .pipe(map(res => res));
  }
  updateProfile(username: string) {
    this.username = username;
  }
}
