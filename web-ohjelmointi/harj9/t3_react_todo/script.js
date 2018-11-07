// TodoBanner component
class TodoBanner extends React.Component {
  // render this component
  render() {
    return <h1>Todo Example with React</h1>;
  }
}

// TodoList component
class TodoList extends React.Component {
  // render this component
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            {item} <img src="delete.jpg" onClick={this.props.removeItem.bind(this, index)} />
          </li>
        ))}
      </ul>
    );
  }
}

// TodoForm component
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // add a new item -> call parent
  handleSubmit(e) {
    // prevent normal submit event
    e.preventDefault();
    // call parent to add a new item
    this.props.onFormSubmit(this.refs.item.value);
    // remove new typed item from text input
    this.refs.item.value = '';
    // focus text input
    this.refs.item.focus();
  }

  componentDidMount() {
    this.refs.item.focus();
  }

  // render component
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="item" placeholder="Add task" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

// App component
class App extends React.Component {
  // init state
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  // add a new item
  addItem(newItem) {
    if (newItem != '') {
      // add new item to items array
      this.state.items.push(newItem);
      // render again
      this.setState({ items: this.state.items });
      console.log(this.state);
    }
  }

  removeItem(index) {
    // remove from items array
    this.state.items.splice(index, 1);
    // render again
    this.setState({ items: this.state.items });
    console.log(this.state);
  }

  // render component
  render() {
    return (
      <div>
        <TodoBanner />
        <TodoForm onFormSubmit={this.addItem} />
        <TodoList items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
