import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()
  public exibirPainel: EventEmitter<string> = new EventEmitter<string>();

  public formularioLogin: FormGroup = new FormGroup({
    email: new FormControl(null),
    senha: new FormControl(null)
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public autenticar(): void {
    console.log('login', this.formularioLogin);

    this.authService.autenticar(
      this.formularioLogin.value.email,
      this.formularioLogin.value.senha
    );
  }

}
