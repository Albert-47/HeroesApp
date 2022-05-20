import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/hero/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import NavBar from '../components/ui/NavBar';


const DashboardRoutes = () => {
  return (
      <>
    <NavBar />

        <div className="container">
        <Routes>
                <Route path="/" element={<MarvelScreen />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DCScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/hero/:heroId" element={<HeroScreen />} />
        </Routes>
        </div>
       </>
  )
}

export default DashboardRoutes