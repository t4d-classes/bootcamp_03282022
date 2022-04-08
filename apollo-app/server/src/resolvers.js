import fetch from 'node-fetch';

export const resolvers = {
    Query: {
        message() {
            return 'Welcome to React and Apollo!';
        },
        luckyNum() {
            return 7;
        },
        pi() {
            return 3.141592654;
        },
        graphqlIsCool() {
            return true;
        },
        author(_, args) {
            return fetch('http://localhost:5050/authors/' + args.authorId)
                .then(res => res.json());
        },
        authors() {
            return fetch('http://localhost:5050/authors')
                .then(res => res.json());
        },
        book(_, args) {
            return fetch('http://localhost:5050/books/' + args.bookId)
                .then(res => res.json());
        },
        async bookByIsbn(_, args) {
            const res = await fetch('http://localhost:5050/books?isbn=' + args.isbn)
            const books = await res.json();
            return books[0];

        },
        books() {
            return fetch('http://localhost:5050/books')
                .then(res => res.json());
        },
        booksByAuthorId(_, args) {
            return fetch('http://localhost:5050/books?authorId=' + args.authorId)
                .then(res => res.json());
        },
    },
    Author: {
        // default field resolver
        // id(author) => author.id,
        // firstName(author) => author.firstName,
        fullName(author) {
            return `${author.firstName} ${author.lastName}`;
        },
        books(author) {
            return fetch('http://localhost:5050/books?authorId=' + author.id)
                .then(res => res.json());
        }
    },
    Book: {
        author(book) {
            return fetch('http://localhost:5050/authors/' + book.authorId)
                .then(res => res.json());
        }
    }
};
