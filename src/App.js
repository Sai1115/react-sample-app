import logo from './logo.svg';
import './App.css';
import Counter from './componenets/Counter';




function App() {

  const setPlace = (location) => {
    console.log("Location and Dish from Child we called back is", location);
    
  }

  const displayDish = (rice) => {
    console.log("The Dish we got from child is", rice);
  }

  return (
    <div className="App">
      {/* <h1>MY FIRST REACT APP</h1> */}
      {/* <FirstComponent sendAustin={(place) => setPlace(place)} sendDish={(rice) => displayDish(rice)} /> */}
      {/* <UseStateComp /> */}
      <Counter />
    </div>
  );
}

export default App;
