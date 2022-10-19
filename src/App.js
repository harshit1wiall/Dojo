import{BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'
import Create from './pages/create/Create'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import  Project from './pages/project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

function App() {
  const {authIsReady,user}=useAuthContext()
  return (
    <div className="App">
    {authIsReady &&(
<BrowserRouter>
{user && <Sidebar/>}
<div className="container">
<Navbar/>
<Routes>
<Route path='/' element={user?<Dashboard/>:<Navigate to='/login'/>}/>
<Route path='/create' element={user?<Create/>:<Navigate to='/login'/>}/>
<Route path='/login' element={user?<Navigate to='/'/>:<Login/>}/>
<Route path='/signup' element={user ?<Navigate to='/'/>:<Signup/>}/>
<Route path='/projects/:id' element={user?<Project/>:<Navigate to='/login'/>}/>
</Routes>
</div>
{user &&<OnlineUsers/>}
</BrowserRouter>
    )}
    </div>
  );
}

export default App
