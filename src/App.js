
import './App.css';
import Person from './components/Person';
import Counter from './components/Counter';

const App = () =>{
  
  
  return (
    <div className="App">
      <Person name={'Ashwini'} lastName={'Jadhav'} age={27}/>
      <Person
      name='Sameer'
      lastName='Jadhav'
      age={23}
      />
      <Counter />
    </div>
  );
}

export default App;
