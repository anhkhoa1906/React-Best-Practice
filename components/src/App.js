
import './App.css';
import Counter from './components/Header/Counter';
import Header from './components/Header/Greeting';
import GreetingMessage from './components/Header/GreetingMessage';
import InputDisplay from './components/Header/InputDisplay';
import RegisterForm from './components/Header/RegisterForm';
import StylebButton from './components/Header/StyledButton';
import UserListAPI from './components/Header/UserListAPI';
import UserList from './components/Header/UserList';
import Message from './components/Header/WelcomeMessage';
 


function App() {
  return (
    <div className="App">
     <Header/>
     <Message name="KhoaAnh" age={23}/>
     <button className='button-counter'>
     <Counter/>
     </button>
     <>
     <InputDisplay/>
     </>
     <UserList/>
     <GreetingMessage isAdmin={true}/>
     <GreetingMessage isAdmin={false}/>
     <StylebButton/>
     <UserListAPI/>
    <RegisterForm/>

     
     
     
    </div>
   
   
  );
}


export default App;
