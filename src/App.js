
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import Playlist from './components/Playlist';
import SideNav from './components/SideNav';
import Favourite from './components/Favourite';

function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path='/' element={<Playlist/>}/>
      </Routes>
      <AudioPlayer />
    </div>
  );
}

export default App;
