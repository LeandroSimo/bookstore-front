import { Categoria } from "./../model/categoria.model,";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CategoriaService {
  private _baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "OK", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  findAll(): Observable<Categoria[]> {
    const url = `${this._baseUrl}/category`;
    return this.http.get<Categoria[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  findById(id: String): Observable<Categoria> {
    const url = `${this._baseUrl}/category/${id}`;
    return this.http.get<Categoria>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this._baseUrl}/category`;
    return this.http.post<Categoria>(url, categoria).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  delete(id: String): Observable<void> {
    const url = `${this._baseUrl}/category/${id}`;
    return this.http.delete<void>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  update(categoria: Categoria): Observable<Categoria> {
    const url = `${this._baseUrl}/category/${categoria.id}`;
    return this.http.put<Categoria>(url, categoria).pipe(
      map((obj) => obj),
      catchError((e) => this.erroHandler(e))
    );
  }

  erroHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro! Verifique se os campos estão devidamente preenchidos!", true);
    return EMPTY;
  }
}
