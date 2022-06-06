import {Route,Routes} from 'react-router-dom'
import Login from './views/Login';
import Home from './views/Home';
import Users from './views/Users';
import Item from './views/Item';
import Error from './views/Error';

function App() {
  const isAuth=localStorage.getItem('isAuth')
  return (
    <div className="App">
     
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
         { isAuth &&  <Route path="/home" element={<Home />}>
        </Route>}
        { isAuth && <Route path="/users" element={<Users />}></Route>}
        {isAuth && <Route path={"/items"} element={<Item />}></Route>}
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
