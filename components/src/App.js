
import './App.css';
import Counter from './components/Header/Counter';
import Header from './components/Header/Greeting';
import Message from './components/Header/WelcomeMessage';

function App() {
  return (
    <div className="App">
     <Header/>
     <Message name="KhoaAnh" age={30}/>
     <button className='button-counter'>
     <Counter/>
     </button>
    </div>
   
   
  );
}


export default App;
