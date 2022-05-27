import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../model/livro.model";
import { LivroService } from "../service/livro.service";

@Component({
  selector: "app-livro-read-all",
  templateUrl: "./livro-read-all.component.html",
  styleUrls: ["./livro-read-all.component.css"],
})
export class LivroReadAllComponent implements OnInit {
  livros: Livro[] = [];
  id_cat: String = this.route.snapshot.paramMap.get("id_cat")!;

  displayedColumns: string[] = ["id", "title", "book", "action"];

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cat;
    this.findAll();
  }

  findAll(): void {
    this.livroService.findAllByCategorya(this.id_cat).subscribe((reposta) => {
      console.log("Teste");
      this.livros = reposta;
    });
  }

  createdBookScreen(): void {
    this.router.navigate([`category/${this.id_cat}/books/create`]);
  }

}
