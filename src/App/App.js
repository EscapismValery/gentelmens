import { Header } from '../components/Header/Header';
import { MainPage } from '../pages/MainPage';
import { AboutUsPage } from '../pages/AboutUsPage';
import './App.scss';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer } from '../components/Footer';
import { ContactsPage } from '../pages/ContactsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { CertificatesPage } from '../pages/CertificatesPage';
import { PortfolioPage } from '../pages/PortfolioPage';
import { MastersPage } from '../pages/MastersPage';
import { AlexeyMasterPage } from '../pages/masters/AlexeyMasterPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main className='main flex'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/masters' element={<MastersPage />} />
            <Route path='/alexey' element={<AlexeyMasterPage />} />

            <Route path='/portfolio' element={<PortfolioPage />} />
            <Route path='/certificates' element={<CertificatesPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
