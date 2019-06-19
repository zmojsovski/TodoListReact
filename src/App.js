import React, {Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';


import './App.css';

class App extends Component {
  state = {
    brojac: 3,
    todos: [
      {
        id:uuid.v4(),
      title:'Take out the trash',
      completed:false
    },
    {
      id:uuid.v4(),
    title:'Dinner whatever',
    completed:false
  },
  {
    id:uuid.v4(),
  title:'Meeting with boss',
  completed:false
    } 
  ],
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
  todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  //Vratigi tie so se razlicni od ova ID(napravi kopija)
  delTodo = (id) => {
    this.setState({brojac: this.state.brojac-1})
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo=(title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({brojac: this.state.brojac+1})
    this.setState({todos: [...this.state.todos, newTodo]
    })
  }
  render(){
  return (
    <div className="App">
    <div className="container">
     <Header/>
     <AddTodo addTodo={this.addTodo}/>
     <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
     <Footer brojac={this.state.brojac}/>
    </div>
    </div>
  );
}
}

export default App;
