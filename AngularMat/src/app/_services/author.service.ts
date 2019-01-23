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

  constructor(private http: HttpClient) {}

  add(author: Author) {
    return this.http
      .post<Author>(`${environment.baseUrl}/authors`, author)
      .pipe(
        tap(line => {
          const currentValue = this.authorsSubject.value;
          const updatedValue = [...currentValue, line];
          this.authorsSubject.next(updatedValue);
        })
      );
  }

  edit(author: Author) {
    return this.http
      .put<Author>(`${environment.baseUrl}/authors/${author.id}`, author)
      .pipe(
        tap(_ => {
          const currentAuthor = this.authorsSubject.value.find(
            x => x.id === author.id
          );
          currentAuthor.name = author.name;
          currentAuthor.gender = author.gender;
        })
      );
  }

  delete(id: number) {
    return this.http
      .delete<Author>(`${environment.baseUrl}/authors/${id}`)
      .pipe(
        tap(_ => {
          let authors = this.authorsSubject.value;
          authors = authors.filter(author => author.id !== id);
          this.authorsSubject.next(authors);
        })
      );
  }

  getAll() {
    return this.http
      .get<Author[]>(`${environment.baseUrl}/authors`)
      .pipe(tap(authors => this.authorsSubject.next(authors)));
  }

  fliter(keyword: string) {
    return this.http.get<Author[]>(`${environment.baseUrl}/authors`).pipe(
      tap(authors => {
        const filterAuthors = authors
        .filter(x => x.name.toLowerCase().includes(keyword.toLowerCase()));
        this.authorsSubject.next(filterAuthors);
      })
    );
  }
}
