import React from 'react';
import ReactDOM from 'react-dom';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
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
function App(props) {
  return (
    <main>
      <Header title={props.title} />

      <section className='todo-list'>
        {props.todos.map(todo =>
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />)
        }
      </section>
    </main>
  );
}

App.propTypes = {
  title: React.PropTypes.string,
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
  })).isRequired /*массив объектов, можно отправить просто  array или arrayOf(React.PropTypes.object)*/
};

App.defaultProps = {
  title: 'React Todo'
}

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
