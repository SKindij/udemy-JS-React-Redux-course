import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

// із  таким видом імпорту webpack шукає в папці index.js
import {MainPage, ComicsPage} from '../pages';

// динамічні імпорти ставимо після статичних імпортів
const Page404 = lazy( () => import('../pages/404') );
const SingleComicPage = lazy( () => import('../pages/SingleComicPage') );

const App = () => {
  // fallback - запасний компонент на випадок проблем завантаження
  
  return (
    <Router>
      <div className="app">
        <AppHeader/>
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:comicId" element={<SingleComicPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App;
