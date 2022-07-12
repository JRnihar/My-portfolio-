import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Post from './Components/Post';
import Voxeldog from './Components/Voxeldog';
import VoxelDog from './Components/Voxeldog';
import Work from './Components/Work';



function App() {
  return (
    <div className='app'>
      <Header></Header>
      {/* <VoxelDog></VoxelDog> */}
      <Voxeldog></Voxeldog>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='work' element={<Work></Work>}></Route>
      <Route path='post' element={<Post></Post>}></Route>
    </Routes>
    </div>
  );
}

export default App;
