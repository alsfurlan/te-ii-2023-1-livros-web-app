import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { LivroCadastroComponent } from './components/cadastro/livro-cadastro.component';
import { LivroListaComponent } from './components/lista/livro-lista.component';
import { LivroService } from './services/livro.service';

const routes: Route[] = [
    {
        path: 'lista',
        component: LivroListaComponent
    },
    {
        path: 'cadastro',
        component: LivroCadastroComponent,
    },
    {
        path: 'edicao/:id',
        component: LivroCadastroComponent
    }
]

@NgModule({
    imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    declarations: [LivroListaComponent, LivroCadastroComponent],
    providers: [LivroService]
})
export class LivroModule {}