import {React, lazy , Suspense} from "react";
import {GlobalStyle} from './styles/GlobalStyles'
import Header from "./components/Header";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
//import Home from "./pages/Home";
//import Contactanos from "./pages/Contactanos";
//import QuienesSomos from "./pages/QuienesSomos";
import Footer from "./components/Footer";
import Page404 from "./pages/Page404";

const HomeComponent = lazy(() => import('./pages/Home'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Contactanos = lazy(() => import('./pages/Contactanos'));

function App() {


  return (
    <>
      <GlobalStyle/>
      <Header />
      <ContainerFirst  >
        
        <Routes>
          <Route path="/" element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <HomeComponent/>
            </Suspense>
          } />
          <Route path="/nosotros" exact element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <QuienesSomos/>
            </Suspense>
          }/>
          <Route path="/contactanos" exact element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <Contactanos/>
            </Suspense>
          }/>

          <Route path="*" exact element={
            <Suspense fallback={<h3>Loading...</h3>}>
              <Page404/>
            </Suspense>
          }/>
        </Routes>
      </ContainerFirst>
        <Footer/> 
    </>
  )
}

export default App;

const ContainerFirst = styled.div`
  min-height: calc(100vh - 4rem);
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 25%;
  
  @media (max-width: 900px) {
    padding: 0 15%;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
  }
  
  @media (max-width: 500px) {
    padding: 0 1rem;
  }


`
