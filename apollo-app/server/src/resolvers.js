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
    }
  },
};
