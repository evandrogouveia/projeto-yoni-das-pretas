import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable, of } from 'rxjs';

const columnData: any = [
  { field: 'nomeSocial', header: 'Cliente' },
  { field: 'email', header: 'E-mail' },
  { field: 'profissao', header: 'Profissão' }
];

@Component({
  selector: 'app-usuarios-reprovados',
  templateUrl: './usuarios-reprovados.component.html',
  styleUrls: ['./usuarios-reprovados.component.scss']
})
export class UsuariosReprovadosComponent {
  bsModalRef?: BsModalRef;
  gridData: any = [];
  colData = [];
  usuariosCadastrados$: Observable<any> = of([
    {avatar: 'assets/imgs/team-1.jpg', nomeSocial: 'John Michael', email: 'john@email.com.br', profissao: 'Arquiteto'},
    {avatar: 'assets/imgs/team-2.jpg', nomeSocial: 'Alex Smith', email: 'alex_smith@email.com.br', profissao: 'Médico'},
    {avatar: 'assets/imgs/team-3.jpg', nomeSocial: 'Samantha Ivy', email: 'ivy@email.com.br', profissao: 'Psicóloga'},
    {avatar: 'assets/imgs/team-1.jpg', nomeSocial: 'John Michael', email: 'john@email.com.br', profissao: 'Arquiteto'},
    {avatar: 'assets/imgs/team-2.jpg', nomeSocial: 'Alex Smith', email: 'alex_smith@email.com.br', profissao: 'Médico'},
    {avatar: 'assets/imgs/team-3.jpg', nomeSocial: 'Samantha Ivy', email: 'ivy@email.com.br', profissao: 'Psicóloga'},
  ]);

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.colData = columnData;
  }

  openDialogRespostas() {
    const initialState = {
      data: {
        modalType: 'RESPOSTAS',
        titleModal: 'Respostas do formulário'
      }
    };
    this.bsModalRef = this.modalService.show(
      ModalComponent,
      Object.assign({ initialState }, { class: 'modal-respostas' }),
    );
  }

  editGetEvent(event: any): void {

  }

  deleteGetEvent(event: any): void {
    const initialState = {
      data: {
        modalType: 'CONFIRM_DELETE',
      }
    };
    this.bsModalRef = this.modalService.show(
      ModalComponent,
      Object.assign({ initialState }, { class: 'modal-confirm-delete' }),
    );
  }
}
