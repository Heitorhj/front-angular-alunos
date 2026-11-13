import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Aluno } from '../modelo/aluno';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AlunoServico {
    // URL base para a API de alunos
    private baseUrl = 'http://localhost:8080/alunos';

    // Injeção de dependência no novo estilo do Angular 16
    private http = inject(HttpClient);

    // Método para buscar todos os alunos
    async buscarTodos(): Promise<Aluno[]> {
        return await firstValueFrom( // Converte o Observable retornado pelo HttpClient em uma Promise
            this.http.get<Aluno[]>(this.baseUrl)
        );
    }
}
