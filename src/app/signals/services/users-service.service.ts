import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private apiUrl = 'https://reqres.in/api/users';
  private http = inject(HttpClient);

  getUserById(id: number): Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.apiUrl}/${id}`)
      .pipe(
        map(response => response.data),
        tap(console.log)
      )
  }
}
