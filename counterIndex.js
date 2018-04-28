

class Button extends React.Component {

  handleClick = () => this.props.incrementCount(this.props.incrementValue);

  render() {
    return (
      <button  onClick={ this.handleClick } >
        +{this.props.incrementValue }
      </button>
    );
  }
};

const Result = (props) => {
  return (
    <div> { props.counter } </div>
    );
};

class App extends React.Component {
  
  state = { counter: 0 };

  incrementCount = ( increment ) => {
    this.setState( (prevState) => ({
      counter: prevState.counter + increment,
    }));
  };

  render() {
    return (
      <div>
        <Button incrementCount = { this.incrementCount } incrementValue = { 1 }/>  
        <Button incrementCount = { this.incrementCount } incrementValue = { 5 }/>  
        <Button incrementCount = { this.incrementCount } incrementValue = { 10 }/>  
        <Button incrementCount = { this.incrementCount } incrementValue = { 100 }/>  
        <Result counter={ this.state.counter }/>  
      </div>
    );
  }
};




ReactDOM.render(
  <App />,
  document.getElementById( 'root' )
);




