import logo from './logo.svg';
import './App.css';

import PersonCard from './Components/PersonCard'

let person = [
  {firstName:'Jane', lastName:'Doe', age:45, hairColor:'black'},
  {firstName:'John', lastName:'Smith', age:88, hairColor:'Brown'},
  {firstName:'Millard', lastName:'Fillmore', age:50, hairColor:'Brown'},
  {firstName:'Maria', lastName:'Smith', age:62, hairColor:'Brown'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {person.map((i)=>{return <PersonCard firstName={i.firstName} lastName={i.lastName} age={i.age} hairColor={i.hairColor}/>})}
      </header>
    </div>
  );
}

export default App;
