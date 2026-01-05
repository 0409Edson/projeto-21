const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Carlos', nota: 4 },
    { nome: 'Julia', nota: 9 }
];

const filtrarAlunosAprovados = (listaAlunos) => {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
};

const aprovados = filtrarAlunosAprovados(alunos);

console.log('Alunos Aprovados (Nota >= 6):');
console.table(aprovados);
