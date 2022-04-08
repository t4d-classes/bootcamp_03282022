import { useQuery, gql, useMutation } from "@apollo/client";

import { BookTable2 } from './components/BookTable2';
import { BookForm } from "./components/BookForm";

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

const APPEND_BOOK_MUTATION = gql`
  mutation AppendBook($book: NewBook) {
    appendBook(book: $book) {
      id
      title
      author {
        id
        firstName
        lastName
      }
    }
  }
`;



function App() {
    const { loading, error, data } = useQuery(APP_QUERY);

    const [ mutateAppendBook ] = useMutation(APPEND_BOOK_MUTATION);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const addBook = (book) => {

        return mutateAppendBook({
            variables: {
                book: {
                    title: book.title,
                    isbn: book.isbn,
                    category: book.category,
                    price: book.price,
                    quantity: book.quantity,
                    author: {
                        firstName: book.authorFirstName,
                        lastName: book.authorLastName,
                        phoneNumber: book.authorPhoneNumber,
                    }
                },
            },
            refetchQueries: [ { query: APP_QUERY } ],
        });

    };

    return (
        <>
            <div>{data.message} - {data.luckyNum}</div>
            <BookTable2 books={data.books} />
            <BookForm buttonText="Add Book" onSubmitBook={addBook} />
        </>
    );
}

export default App;
