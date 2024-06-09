import ListItem from './Components/ListItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <ListItem data={{
          discountedPrice : 99.00,
          price : 130.00,
          title : "title of Item 1",
          thumbnail : "placeholder.jpg"
      }}/>
      <ListItem data={{
          discountedPrice : 199.00,
          price : 250.00,
          title : "title of Item 2",
          thumbnail : "placeholder.jpg"
      }}/>
    </div>
  );
}

export default App;
