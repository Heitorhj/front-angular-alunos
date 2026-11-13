export interface Aluno {
    codigo?: string; // Deixa opcional para que o banco de dados gere o código automaticamente
    nome: string;
    nota1: number;
    nota2: number;
}