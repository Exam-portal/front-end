import logo from './logo.svg';
import './App.css';
import MyComponent from './mysamplecode';
import ErrorBoundry from './ErrorBoundry';
import MyAppBar from './appbarcomp';
import Exam from './exam/exam1';
import UserHome from './userhome';
function App() {

  return (
  
    <div>
   <MyAppBar/>
   <UserHome/>
    </div>
  );   
}

export default App;
