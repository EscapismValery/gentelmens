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
import { ShopPage } from '../pages/ShopPage';
import { Product1 } from '../pages/products/Product1';
import { BlogPage } from '../pages/BlogPage';
import { SecretsOfPerfectStylingPage } from '../pages/articles/SecretsOfPerfectStylingPage';

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
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/product1' element={<Product1 />} />

            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/secrets-of-perfect-styling' element={<SecretsOfPerfectStylingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
