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

// Exibição no Console (conforme solicitado no exercício)
console.log('Alunos Aprovados (Nota >= 6):');
console.table(aprovados);

// Exibição no DOM (para facilitar a visualização no navegador)
const renderizarLista = (id, lista) => {
    const ul = document.getElementById(id);
    if (ul) {
        ul.innerHTML = lista.map(aluno => `
            <li class="${aluno.nota >= 6 ? 'aprovado' : ''}">
                <span>${aluno.nome}</span>
                <span class="nota">${aluno.nota}</span>
            </li>
        `).join('');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderizarLista('lista-todos', alunos);
    renderizarLista('lista-aprovados', aprovados);
});
