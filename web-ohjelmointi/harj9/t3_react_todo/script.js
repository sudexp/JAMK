// TodoBanner component
class TodoBanner extends React.Component {
    // render this component
    render (){
        return (
            <h1>Todo Example with React</h1>
        )
    }

}

// TodoList component
class TodoList extends React.Component {

    // render this component
    render () {
      return (
         <ul>
            <li>KORVAA TÄMÄ OHJELMAKOODILLASI</li>
        </ul>
      )
    }

}

// TodoForm component
class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: ""};
    // LISÄÄ TÄHÄN JOS TARVIT MUUTA
  }
    // add a new item -> call parent
    handleSubmit (e) {
        // prevent normal submit event
        e.preventDefault();
        // call parent to add a new item
        //????
        // remove new typed item from text input
        this.refs.item.value = "";
        //????
        // focus text input
        //????
    }

    // render component
    render (){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Korvaa tämä!</p>
            </form>
        );
    }

}

// App component
class App extends React.Component {
    // init state
    constructor(props) {
      super(props);
      this.state = {items: []};
      // LISÄÄ TÄHÄN JOS TARVIT JOTAIN?
    }

    // add a new item
    addItem (newItem) {
        // add new item to items array
        //???
        // render again
        //???
    }

    // remove item
    removeItem (index){
        // remove from items array
        //???
        // render again
        //???
    }

    // render component
    render () {
        return (
            <div>
                <TodoBanner/>
                <TodoForm onFormSubmit={this.addItem} />
                <TodoList items={this.state.items} removeItem={this.removeItem} />
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
