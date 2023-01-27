import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import AddTask from './components/AddTask'; 
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
     <AddTask />
     <ListTask />
    </div>
  );
}

export default App;
