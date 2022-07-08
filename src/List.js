import React, {useState,useEffect} from 'react';
import Client from './Client';

const BookRow = ({book})=> {
    const handleRemove = ({target})=> {
        alert('Remove ISBN='+target.id);
    }

    return (
        <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>
                <button
                    onClick={handleRemove}
                    id={book.isbn}>
                    Remove
                </button>
            </td>
        </tr>
    )  
}

export default function List(props) {
    const [books,setBooks] = useState([]);

    useEffect(
        ()=>{
            Client.get().then(
                (result)=>{
                    setBooks(result);
                }
            );
        },
        [props.newTimestamp]
    );

//rendering    
    if (books.length===0) {
        return (<p>Loading...</p>);
    } else return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => <BookRow book={book} />)}
                </tbody>
            </table>
        </>
    );
}