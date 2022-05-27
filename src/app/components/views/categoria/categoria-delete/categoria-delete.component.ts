import { ActivatedRoute, Router } from "@angular/router";
import { CategoriaService } from "./../service/categoria.service";
import { Categoria } from "./../model/categoria.model,";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-delete",
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
})
export class CategoriaDeleteComponent implements OnInit {
  category!: Categoria;
  id = this.route.snapshot.paramMap.get("id");
  constructor(
    private CategoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id;
    this.findById();
  }

  findById(): void {
    this.CategoriaService.findById(this.id!).subscribe((category) => {
      this.category = category;
    });
  }

  deleteCategory(): void {
    this.CategoriaService.delete(this.id!).subscribe(() => {
      this.CategoriaService.showMessage("Categoria Excluída com Sucesso!");
      this.router.navigate(["/category"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/category"]);
  }
}
