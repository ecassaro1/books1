import './App.css';
import React, {useState} from 'react';
import List from './List.js';
import Form from './Form.js';

function App() {
  const [newTimestamp,setNewTimestamp] = useState(new Date().getTime());

  const handleFormAfterPost = ()=>{
    setNewTimestamp(new Date().getTime());
  }

  return (
    <div className="App">
      <Form
        onAfterPost={handleFormAfterPost}/>
      <List
        newTimestamp={newTimestamp}/>
    </div>
  );
}

export default App;
