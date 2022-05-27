import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../model/livro.model";
import { LivroService } from "../service/livro.service";

@Component({
  selector: "app-livro-delete",
  templateUrl: "./livro-delete.component.html",
  styleUrls: ["./livro-delete.component.css"],
})
export class LivroDeleteComponent implements OnInit {
  id_cat: String = "";

  book: Livro = {
    id: "",
    title: "",
    author_name: "",
    text: "",
  };

  constructor(
    private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.book.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.livroService.findById(this.book.id!).subscribe((resposta) => {
      this.book = resposta;
    });
  }

  delete(): void {
    this.livroService.delete(this.book.id!).subscribe(() => {
      this.livroService.showMessage("Livro Excluido com sucesso!");
      this.router.navigate([`category/${this.id_cat}/books`]);
    });
  }

  cancel() {
    this.router.navigate([`category/${this.id_cat}/books`]);
  }
}
