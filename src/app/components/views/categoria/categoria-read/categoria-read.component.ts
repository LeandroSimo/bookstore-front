import { CategoriaService } from "./../service/categoria.service";
import { Component, OnInit } from "@angular/core";
import { Categoria } from "../model/categoria.model,";
import { Router } from "@angular/router";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {
  categorias: Categoria[] = [];

  displayedColumns: string[] = ["id", "name", "description", "book", "action"];

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.categoriaService.findAll().subscribe((categoria) => {
      this.categorias = categoria;
    });
  }

  createCategory(): void{
    this.router.navigate(['category/create'])
  }
}
