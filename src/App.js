import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import LoginForm from './LoginForm';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
     <Nav/> 
     <LoginForm/>
    </div>
  );
}

export default App;
