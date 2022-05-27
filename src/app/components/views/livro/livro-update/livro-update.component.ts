import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Livro } from "../model/livro.model";
import { LivroService } from "../service/livro.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {

  title = new FormControl("", [Validators.minLength(3)]);
  author_name = new FormControl("", [Validators.minLength(3)]);
  text = new FormControl("", [Validators.minLength(10)]);

  id_cat: String = "";

  book: Livro = {
    id: '',
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
    this.findById()
  }

  findById(): void {
    this.livroService.findById(this.book.id!).subscribe((resposta) => {
      this.book = resposta
    });
  }

  update(): void{
    this.livroService.update(this.book).subscribe(() => {
      this.livroService.showMessage('Livro Atualizado com sucesso!')
      this.router.navigate([`category/${this.id_cat}/books`])
    })
  }

  showMessageTitle() {
    if (this.title.invalid) {
      return "O campo TÍTULO deve conter entre 3 e 100 caracteres!";
    }
    return false;
  }

  showMessageAuthor() {
    if (this.author_name.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100 caracteres!";
    }
    return false;
  }

  showMessageText() {
    if (this.text.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2000 caracteres!";
    }
    return false;
  }

  cancel(){
    this.router.navigate([`category/${this.id_cat}/books`])
  }

}
