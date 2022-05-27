import { Router } from "@angular/router";
import { Categoria } from "./../model/categoria.model,";
import { CategoriaService } from "./../service/categoria.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categpria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent implements OnInit {
  category: Categoria = {
    name: "",
    description: "",
  };

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.categoriaService.create(this.category).subscribe(() => {
      this.categoriaService.showMessage("Categoria criada com sucesso!"),
        this.router.navigate(["/category"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/category"]);
  }
}
