import logo from './logo.svg';
import './App.css';
import './Reg.css';
import Login from './LoginForm';
import Newlogin from './Newlogin';
import Axios from './Axios';
import Timer from './useEffect' ;
import Counter1 from './UseEffectdep'
import UserPage from './User';
import UserDetails from './UserDetails';
import ErrorDetails from './Errorhandle';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Pagination from './pagination';
import Signup from './Signup';
import Registration from './Registration';
import PaginatedItems from './Paging';
import Button from'./Button'
import Counter from './Counter';
import TexttoTable from './TexttoTable'
import BagReceive from './Bagreceived'


function App() {
  return (
    <div className="App">
      <BagReceive/>
   
  </div>
);
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<Signup/>} />
  //     <Route path="/User/:userId" element={ <ErrorDetails/>} />
  //   </Routes>
  // </Router>
//     <div className="App">
// <PaginatedItems itemsPerPage={4} />
//     </div>
  
}

export default App;
