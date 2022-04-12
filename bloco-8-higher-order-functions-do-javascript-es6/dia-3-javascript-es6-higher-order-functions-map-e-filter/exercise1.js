const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// >>> exercicio 1

// const formateBooksName = books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name},`);
// console.log(formateBooksName);

// >>> exercicio 2

// const nameAndAge = books.map((livro) => (
//   { 
//     age: livro.releaseYear - livro.author.birthYear, 
//     author: livro.author.name,
//   }
// ))
// .sort((a, b) => a.age - b.age);
// console.log(nameAndAge);

// >>> execicio 3

// const ficcaoFantasia = books.filter((livro) => (
//   livro.genre === 'Fantasia' || livro.genre === 'Ficção Científica'
// ));
// console.log(ficcaoFantasia);

// >>> exercicio 4
// const maisAntigos = books.filter((livro) => {
//   return livro.releaseYear < 2022 - 60 
// }).sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(maisAntigos);

// >>>> exercicio 5
