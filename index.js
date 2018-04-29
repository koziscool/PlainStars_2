
const allNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const Stars = (props) => {

  const numberOfStars = 1 + Math.floor( Math.random() * 9 );
  return(
    <div className="col-5">
      { allNumbers.map(( number, i) => 
        <i key={i} className="fa fa-star"></i>
      )}
    </div>
  );  
};

const Button = (props) => {
  return(
    <div className="col-2">
      <button>=</button>
    </div>
  );  
};

const Answer = (props) => {
  return(
    <div className="col-5">
      ......
    </div>
  );  
};

const Numbers = (props) => {
  return(
    <div className="card text-center">
      <div>
        { allNumbers.map(( number, i) => 
          <span key={i}>{ number }</span>
        )}
      </div>
    </div>
  );  
};



class Game extends React.Component {
  render() {
    return(
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );  
  }
}

class App extends React.Component {
  render() {
    return(
      <div>
        <Game  />
      </div>
    );  
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

