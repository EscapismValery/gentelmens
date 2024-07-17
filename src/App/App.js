import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage';
import './App.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main className='main flex'>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
