import './App.css'
import TalkOffTopic from './components/TalkOffTopic'
import "./index.css"
import {Route, Routes,HashRouter} from 'react-router-dom'
import TalkFriendly from './components/TalkFriendly';

function App() {

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/friendly' element={<TalkFriendly/>} />
          <Route path="/" element={<TalkOffTopic/>} /> 
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App
