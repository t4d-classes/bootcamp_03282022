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
    author() {
        return fetch('http://localhost:5050/authors/1')
            .then(res => res.json());
    }
  },
};
