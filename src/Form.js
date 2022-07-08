import React, {useState} from 'react';
import Client from './Client';
//import Client from './Client';

export default function Form(props) {

    const [book,setBook] = 
        useState({
            title: '',
            author: '',
            isbn: ''
        });

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
            }
        )
        .catch(err => alert(err));
    }

//rendering
    return (
        <>
            <p>Form</p>
            <form>
                <label for='title'>Title</label>
                <input 
                    id='title'
                    name='title'
                    type='text'
                    value={book.title}
                    onChange={handleChange}/>
                <br/>
                <label for='author'>Author</label>
                <input 
                    id='author'
                    name='author'
                    type='text'
                    value={book.author}
                    onChange={handleChange}/>
                <br/>
                <label for='title'>ISBN</label>
                <input 
                    id='isbn'
                    name='isbn'
                    type='text'
                    value={book.isbn}
                    onChange={handleChange}/>
                <br/>
            </form>

            <button onClick={handleSubmit}>Submit</button>
        </>
    ); 
}