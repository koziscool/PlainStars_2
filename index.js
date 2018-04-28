

const Card = (props) => {
  return(
    <div style={{ margin: '1em' }}>
      <img width="100" src="https://avatars1.githubusercontent.com/u/1393010?v=4" />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>John Kosmicke</div>
        <div>tetris</div>
      </div>
    </div>
  );
}


ReactDOM.render(
  <Card />,
  document.getElementById('root')
);


