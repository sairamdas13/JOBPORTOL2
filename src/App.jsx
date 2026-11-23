import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import AddJob from './components/AddJob';
import JobList from './components/JobList';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div id="container">
        <Header />
        <main id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <h1>Job Portal</h1>
          <AddJob />
          <JobList />
        </main>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
