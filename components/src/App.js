
import './App.css';
import Header from './components/Header/Greeting';
import Message from './components/Header/WelcomeMessage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Message name="KhoaAnh" age={30}/>
    </div>
   
  );
}


export default App;
