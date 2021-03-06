import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    luckyNum: Int
    pi: Float
    graphqlIsCool: Boolean
    author(authorId: ID): Author
    authors: [Author]
    book(bookId: ID): Book
    bookByIsbn(isbn: String): Book
    books: [Book]
    booksByAuthorId(authorId: ID): [Book]
  }

  type Mutation {
    appendAuthor(author: NewAuthor): Author
    appendBook(book: NewBook): Book
  }


  type Author {
      id: ID
      firstName: String
      lastName: String
      phoneNumber: String
      fullName: String
      books: [Book]
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
    author: Author
  }

  input NewAuthor {
    firstName: String
    lastName: String
    phoneNumber: String
  }

  input NewBook {
    isbn: String
    title: String
    author: NewAuthor
    category: String
    price: Float
    quantity: Int
  }  
`;
