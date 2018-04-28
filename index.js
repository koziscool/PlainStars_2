

const Card = (props) => {
  return(
    <div style={{ margin: '1em' }}>
      <img width="100" src={ props.avatar_url } />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{ props.name }</div>
        <div>{ props.company }</div>
      </div>
    </div>
  );
}

const CardList = (props) => {
  return(
    <div>
      { props.cards.map( card => <Card  {...card} /> ) }
    </div>
  );  
}

class Form extends React.Component {

  state = { userName: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log( this.state.userName );

    const  theUrl = "https://api.github.com/users/" + this.state.userName;
    let http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if( http.readyState === 4 && http.status === 200 ){
        console.log( http.responseText );
        // this.props.onSubmit( http.responseText );
        // this.setState({ userName: '' })
      }
    };

    http.open( "GET", theUrl, true ); 
    http.send( null );

  };

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input type="text" 
                  placeholder="Github username" 
                  value={ this.state.userName }
                  onChange={ (e) => this.setState({ userName: e.target.value }) }
                  required />
        <button type="submit">Add card</button>
      </form>
    );  
  }
}


class App extends React.Component {

  state = {
    cards: [
      {
        name: "John Kosmicke",
        company: "tetris",
        avatar_url: "https://avatars1.githubusercontent.com/u/1393010?v=4",
      },
    ],
  };

  render() {
    return(
      <div>
        <Form />
        <CardList cards={ this.state.cards }/>
      </div>
    );  
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


