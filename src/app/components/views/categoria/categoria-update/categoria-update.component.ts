import { CategoriaService } from "./../service/categoria.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Categoria } from "./../model/categoria.model,";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  category!: Categoria;

  id = this.route.snapshot.paramMap.get("id");

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id;
    this.findById()
  }

  findById(): void {
    this.categoriaService.findById(this.id!).subscribe((categoria) => {
      this.category = categoria;
    });
  }

  update(){
    this.categoriaService.update(this.category).subscribe(() => {
      this.categoriaService.showMessage('Categoria Atualizada com Sucesso!')
      this.router.navigate(['/category'])
    })
  }

  cancel(): void {
    this.router.navigate(["/category"]);
  }
}
