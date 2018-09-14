import React from 'react';
import ReactDOM from 'react-dom';
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
      <header>
        <h1>{props.title}</h1>
      </header>

      <section className='todo-list'>
        <div className='todo completed'>
          <button className='checkbox icon'>
            <i className='material-icons'>check_box</i>
          </button>
          <button className='delete icon'>
            <i className='material-icons'>delete</i>
          </button>
          <span className='todo-title'>Изучить JavaScript</span>
        </div>

        <div className='todo'>
          <button className='checkbox icon'>
            <i className='material-icons'>check_box_outline_blank</i>
          </button>
          <button className='delete icon'>
            <i className='material-icons'>delete</i>
          </button>
          <span className='todo-title'>Изучить React</span>
        </div>
      </section>
    </main>
  );
}

App.propTypes = {
  title: React.PropTypes.string/*.isRequired*/
};

App.defaultProps = {
  title: 'React Todo'
}

ReactDOM.render(<App />, document.getElementById('root'));
