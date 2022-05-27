import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Livro } from "../model/livro.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  private _urlBase: String = environment.baseUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(`${msg}`, "OK", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  findAllByCategorya(id_cat: String): Observable<Livro[]> {
    const url = `${this._urlBase}/books?category=${id_cat}`;
    return this.http.get<Livro[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  findById(id: String): Observable<Livro> {
    const url = `${this._urlBase}/books/${id}`;
    return this.http.get<Livro>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  update(book: Livro): Observable<Livro> {
    const url = `${this._urlBase}/books/${book.id}`;
    return this.http.put<Livro>(url, book).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  delete(id: String): Observable<void> {
    const url = `${this._urlBase}/books/${id}`;
    return this.http.delete<void>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  createdBook(book: Livro, id_cat: String): Observable<Livro> {
    const url = `${this._urlBase}/books?category=${id_cat}`;
    return this.http.post<Livro>(url, book).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage(
      "Ocorreu um erro! Verifique se os campos estão devidamente preenchidos!",
      true
    );
    return EMPTY;
  }
}
