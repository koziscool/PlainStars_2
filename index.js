

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


let data=[
  {
    name: "John Kosmicke",
    company: "tetris",
    avatar_url: "https://avatars1.githubusercontent.com/u/1393010?v=4",
  },
]

const CardList = (props) => {
  return(
    <div>
      { props.cards.map( card => <Card  {...card} /> ) }

    </div>
  );  
}



ReactDOM.render(
  <CardList cards={ data } />,
  document.getElementById('root')
);


