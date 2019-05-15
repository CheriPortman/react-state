import React from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default function App() {
  return (
    <div>
      <Welcome name="Stitch" /> 
      <Welcome name="Banjo" />
      <Welcome name="Cu" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
