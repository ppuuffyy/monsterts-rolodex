import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount()  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users}))
     
  }

  onSearchInputChange = (input) => {
    this.setState({searchField : input.target.value});  
  }


  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
      <h1>Monsters rolodex</h1>
      <SearchBox placeholder='search monsters' handleChange={this.onSearchInputChange} />
      <CardList monsters={filteredMonsters}/>


        <button > Change Franke </button>
      </div>
    );
  }
}

export default App;
