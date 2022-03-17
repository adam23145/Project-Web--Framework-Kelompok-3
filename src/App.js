
import React,{ Component } from 'react';
import Header from './components/Header';
import Body from './components/body';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}
export default App;
