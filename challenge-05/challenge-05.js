/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [1, 'Rafael', null, {a: 1}, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(param) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(myVar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunctions(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = ['Ninja', 52.4, true, [1, 2, 'Rafael'], {b: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunctions(myArr, 0);
myFunctions(myArr, 1);
myFunctions(myArr, 2);
myFunctions(myArr, 3);
myFunctions(myArr, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
  var myObj = {
    'livro Um': {
      quantidadePaginas: 100,
      autor: 'Paulo',
      editora: 'Livre'
    },
    'livro Dois': {
      quantidadePaginas: 200,
      autor: 'Carla',
      editora: 'Nove mil'
    },
    'livro Tres': {
      quantidadePaginas: 300,
      autor: 'Maria',
      editora: 'Caisar'
    }
  };

  return !bookName ? myObj : myObj[ bookName ];
  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'livro Tres';
'O livro ' + bookName + ' tem ' + book(bookName).quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro ' + bookName + ' é ' + book(bookName).autor + '.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora + '.'
