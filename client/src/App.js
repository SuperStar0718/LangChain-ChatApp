import { 
  Route,
  Routes,
  // HashRouter,
  BrowserRouter,
  Outlet,
} from 'react-router-dom';
import { Fragment } from 'react';

import './App.css';



import Chat from './components/Chat';
import Navbar from './components/Layout/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App w-full h-full">
        <Routes>
          {/* <Route exact path='/' element={<StartPage />} /> */}
          <Route path='/demo' element={<Chat />} />
          <Route path="/" element={<Chat />} />
        </Routes>

        <Routes>
          <Route element={(
            <>
              <Navbar />
              <Outlet />
            </>
          )}>
      
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
