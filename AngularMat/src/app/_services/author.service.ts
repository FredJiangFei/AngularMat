import { Author } from './../author/author';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authorsSubject = new BehaviorSubject<Author[]>([]);
  authors$ = this.authorsSubject.asObservable();

  constructor(private http: HttpClient) { }

  add(author: Author) {
    return this.http.post<Author>(`${environment.baseUrl}/authors`, author)
      .pipe(
        tap(line => {
          const currentValue = this.authorsSubject.value;
          const updatedValue = [...currentValue, line];
          this.authorsSubject.next(updatedValue);
        })
      );
  }

  edit(id: number, name: string) {
    const params = {
      id: id,
      name: name
    };
    return this.http.put<Author>(`${environment.baseUrl}/authors`, params)
      .pipe(
        tap(_ => {
          const currentLine = this.authorsSubject.value.find(x => x.id === id);
          currentLine.name = name;
        })
      );
  }

  delete(id: number) {
    return this.http.delete<Author>(`${environment.baseUrl}/authors/${id}`)
      .pipe(
        tap(_ => {
          let lines = this.authorsSubject.value;
          lines = lines.filter(line => line.id !== id);
          this.authorsSubject.next(lines);
        })
      );
  }

  getAll() {
    return this.http.get<Author[]>(`${environment.baseUrl}/authors`)
      .pipe(
        tap(lines => this.authorsSubject.next(lines))
      );
  }
}
