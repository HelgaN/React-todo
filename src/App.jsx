import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
/*
const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', {className: 'subtitle'}, 'Приложение на React');
const container = React.createElement('div', null, title, subtitle);

const app = (
  <div>
    <h1>React Todo</h1>
    <p>Приложение на React</p>
  </div>
);

function App() {
  return (
    <div>
      <h1>React Todo</h1>
      <p className='subtitle'>Приложение на React</p>
    </div>
  );
}

console.log(title);
console.log(subtitle);
console.log(container);

const dom = ReactDOM.render(React.createElement(App), document.getElementById('root'));
*/

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      todos: this.props.initialData
    };
    console.log("constructor");
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: todos});   // обновляем состояние
  }

  handleAdd(title) {
    let todo = {
      id: this.nextId(),
      title,      // тоже самое, что и title: title
      completed: false
    };

    let todos = [...this.state.todos, todo];

    this.setState({ todos });     // обновляем состояние
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos: todos }); // обновляем состояние
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.title = title;
      }
      return todo;
    });

    this.setState({ todos });
  }

  render () {
    console.log("render");
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos}/>

        <section className='todo-list'>
          {this.state.todos.map(todo =>
            <Todo key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onStatusChange={this.handleStatusChange}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
           />)
          }
        </section>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string,
  initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired /*массив объектов, можно отправить просто  array или arrayOf(React.PropTypes.object)*/
};

App.defaultProps = {
  title: 'React Todo'
}

ReactDOM.render(<App initialData={todos}/>, document.getElementById('root'));
