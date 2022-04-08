import { useQuery, gql } from "@apollo/client";

import { BookTable2 } from './components/BookTable2';

const APP_QUERY = gql`
  query App {
    message
    luckyNum
    books {
        id title price quantity
        author {
            fullName
        }
    }
  }
`;



function App() {
    const { loading, error, data } = useQuery(APP_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div>{data.message} - {data.luckyNum}</div>
            <BookTable2 books={data.books} />
        </>
    );
}

export default App;
