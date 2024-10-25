import './App.css';
import Hello from './Components/Hello';
import WithCounter from './Components/WithCounter';

// *****Passing Hello  component as props ********

const CounterWithHoc1 = WithCounter(Hello)
function App() {
  return (
    <div className="App">
     <h1>Counter App</h1>
     <CounterWithHoc1/>
    </div>
  );
}

export default App;
