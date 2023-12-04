import './App.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Detail from './components/Detail';
import Dashboard from './components/Dashboard';
import AddStaff from './components/AddStaff';
import TopNews from './components/TopNews';

function App() {
  return (
    <div>
      <NavigationBar />

      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route  path='/addNewStaff' element={<AddStaff/> }></Route>
      <Route path='/topnews' element={<TopNews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
