import React from 'react';
import './App.css';
import {Card} from './components/avatar'
import { Counter } from './components/counter';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numbers: [1,2,3,4,5]
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Counter /> */}
      
     < Card name="Basic" price ='5.99'/>
     < Card name="Standard" price ='10.99'/>
     < Card name="Premium" price ='20.99'/>
    
        </header>
      </div>
    );
  }
}

export default App;
