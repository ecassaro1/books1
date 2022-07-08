import React, {useState} from 'react';
import Client from './Client';
//import Client from './Client';

export default function Form(props) {

    const initialBook = {
        title: '',
        author: '',
        isbn: ''
    }

    const [book,setBook] = 
        useState(initialBook);

    const handleChange = ({target})=>{
        setBook((prev)=>{
            return {
                ...prev,
                [target.name]: target.value
            };
        });
    }

    const handleSubmit = (evt)=>{
        Client.post(book)
        .then(
            ()=>{
                //chamar o handler handleFormAfterPost que vem nos props, pra refazer a lista 
                props.onAfterChange();
                setBook(initialBook);
            }
        )
        .catch(err => alert(err));
    }

//rendering
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>ISBN</label>
                        </td>
                        <td>
                            <input 
                                id='isbn'
                                name='isbn'
                                type='text'
                                value={book.isbn}
                                onChange={handleChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>Title</label>
                        </td>
                        <td>
                            <input 
                                id='title'
                                name='title'
                                type='text'
                                value={book.title}
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <label>Author</label>
                        </td>
                        <td>
                            <input 
                                id='author'
                                name='author'
                                type='text'
                                value={book.author}
                                onChange={handleChange}/>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button onClick={handleSubmit}>Submit</button>
        </>
    ); 
}