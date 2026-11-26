// Exercício 1: Controle de Estoque Simples (Lista Básica)
// Cenário: Você está desenvolvendo o módulo inicial do sistema de uma loja de informática e 
// precisa armazenar o nome dos periféricos disponíveis na vitrine.

// Tarefas:
// Crie uma lista chamada periféricos contendo 5 itens(objetos) 
// de sua escolha (ex: "Teclado Mecânico", "Mouse Gamer", etc.).
// Altere o terceiro item da lista para "Webcam Full HD".
// Utilizando um laço de repetição (for), percorra a lista e exiba 
// no console cada item acompanhado da sua posição na vitrine (ex: "Posição 0: Teclado Mecânico").

const perifericos = [
    'mouse', 'teclado', 'Webcam Full HD', 'fone', 'microfone'
]

for (let contador = 0; contador < 4; contador = contador + 1) {
    console.log(perifericos[contador]);
}

// Exercício 2: Ficha Cadastral de Equipamento (Objeto Básico)
// Cenário: O setor de suporte técnico precisa catalogar as especificações das máquinas do laboratório 
// para facilitar a manutenção.
// Tarefas:
// Crie um objeto chamado computador com as seguintes propriedades: patrimonio (texto), 
// processador (texto), memoriaRAM (número em GB) e emManutencao (booleano).
// Acesse e exiba no console uma frase resumindo a máquina 
// (ex: "O computador de patrimônio [patrimonio] possui processador [processador] e [memoriaRAM]GB de RAM.").

const computador = {
    patrimonio: 'Pc da Prefeitura',
    processador: 'Intel i9 14th',
    memoriaRam: 32,
    emManutenção: true,
}
console.log('o', computador.patrimonio, 'possui o processaor', computador.processador, 'e', computador.memoriaRam, 'GB de RAM.');

// Exercício 3: Carrinho de Compras (Lista de Objetos)
// Cenário: Você precisa calcular o valor total do carrinho de compras de um cliente em um e-commerce.
// Tarefas:
// Crie uma lista chamada carrinho contendo 4 objetos. Cada objeto deve 
// representar um produto com as propriedades: nome (texto), preco (número) e quantidade (número).
// Crie uma variável valorTotal iniciando em 0.
// Usando um loop (for), percorra a lista carrinho, multiplique o 
// preco pela quantidade de cada item e some ao valorTotal.
// Ao final, exiba no console o valor total da compra.

const carrinho = [
    {
        nome: 'Intel i9 14th',
        preco: 3000,
        quantidade: 2,
    },

    {
        nome: 'Fone',
        preco: 500,
        quantidade: 2,
    },

    {
        nome: 'Monitor',
        preco: 1000,
        quantidade: 1,
    },

    {
        nome: 'Mouse',
        preco: 600,
        quantidade: 3,
    }
]
let valorTotal = 0;

for (let contador = 0; contador <= 3; contador = contador + 1) {
    valorTotal = valorTotal + (carrinho[contador].preco * carrinho[contador].quantidade);
}
console.log('R$', valorTotal, 'reais');

//     Exercício 4: Perfil de Usuário e Permissões (Objeto com Listas)
// Cenário: No sistema de autenticação da empresa, cada usuário possui dados básicos e uma lista de módulos que tem permissão para acessar.
// Tarefas:
// Crie um objeto chamado usuario com as propriedades: nome (texto), cargo (texto) e permissoes 
// (uma lista de textos, como ["vendas", "relatorios", "estoque"]).
// Exiba no console o nome e o cargo do usuário.
// Utilizando um loop (for), percorra apenas a lista permissoes que está dentro do objeto e imprima cada permissão no formato: 
// "- Acesso liberado: [permissao]".
// Ainda dentro do loop, verifique (usando if) se o usuário possui a permissão "admin". Caso tenha, exiba um alerta no console: 
// "Atenção: Usuário com privilégios totais!".


const usuario = {
    nome: 'Davi',
    cargo: 'Gestor de TI',
    permissoes: ['vendas', 'relatorios', 'estoque']
};

console.log(usuario.nome);
console.log(usuario.cargo);

for (let contador = 0; contador < usuario.permissoes.length; contador = contador + 1) {

    console.log('- Acesso liberado: ' + usuario.permissoes[contador]);

    if (usuario.permissoes[contador] === 'admin') {
        console.log('Atenção: Usuário com privilégios totais!');
    }
}
