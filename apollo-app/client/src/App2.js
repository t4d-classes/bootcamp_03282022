import { useQuery, gql } from "@apollo/client";

import { BookTable2 } from './components/BookTable2';

const APP_QUERY = gql`
  query App {
    message
    luckyNum
    authors {
        id firstName lastName
    }
    books {
        id title price quantity authorId
    }
  }
`;

const getAuthor = (authors, authorMap, authorId) => {
    if (!authorMap.has(authorId)) {
        const author = authors.find(author => author.id === authorId);
        if (!author) {
            authorMap.set(authorId, 'Unknown');
        } else {
            authorMap.set(authorId, `${author.firstName} ${author.lastName}`);
        }
    }
    return authorMap.get(authorId);
}

const joinBookAuthors = (books, authors) => {
    const authorMap = new Map();
    return books.map(book => {
        return {
            ...book,
            authorFullName: getAuthor(authors, authorMap, book.authorId),
        };
    });
};

function App() {
    const { loading, error, data } = useQuery(APP_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div>{data.message} - {data.luckyNum}</div>
            <BookTable2 books={joinBookAuthors(data.books, data.authors)} />
        </>
    );
}

export default App;
