import React, {useState,useEffect} from 'react';
import Client from './Client';

const BookRow = (props)=> {
    const handleRemove = ({target})=> {
        //alert('Remove ISBN='+target.id);
        Client.delete(target.id)        
        .then(
            ()=>{
                //chamar o handler handleFormAfterPost que vem nos props, pra refazer a lista 
                props.onAfterChange();
            }
        )
        .catch(err => alert(err));;
    }

    return (
        <tr>
            <td>{props.book.isbn}</td>
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>

            <td>
                <button
                    onClick={handleRemove}
                    id={props.book.isbn}>
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
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(
                        (book) => 
                            <BookRow
                                key={book.isbn.toString()} 
                                book={book} 
                                onAfterChange={props.onAfterChange}
                            />
                    )}
                </tbody>
            </table>
        </>
    );
}