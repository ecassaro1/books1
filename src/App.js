import './App.css';
import React, {useState} from 'react';
import List from './List.js';
import Form from './Form.js';
import { styles } from './styles';

const divStyle = {
  background: styles.background,
  height: '100%',
  color: styles.color
};

function App() {
  const [newTimestamp,setNewTimestamp] = useState(new Date().getTime());

  const handleAfterChange = ()=>{
    setNewTimestamp(new Date().getTime());
  }

  return (
    <>
      <div id = "App" className="App" style={divStyle}>
        <h3>Biblioteca</h3>
        <br/>
        <div>
          <Form
            onAfterChange={handleAfterChange}/>
        </div>
        <br/>
        <div>
          <List
            onAfterChange={handleAfterChange}
            newTimestamp={newTimestamp}/>
        </div>
      </div>
    </>
  );
}

export default App;
