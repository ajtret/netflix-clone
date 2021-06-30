import React, { useEffect } from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LoginPage from './LoginPage'
import { auth } from './firebase';
import { useDispatch,useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=> { 
    const unsubscribe=auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        );
      
      }
      else{
          dispatch(logout)
      }
    }) ;
    return unsubscribe ;
  } , [] );
  return (
    
      <BrowserRouter>
      {! user ? (
        <LoginPage />
      ) : (
        <Switch>
        <div className="App">
        <Route exact path="/login">
            <Nav />
            <Banner />
            <Row 
            title = "NETFLIX ORIGINALS" 
            fetchUrl = {requests.fetchNetFlixOriginals}
            isLargeRow = {true}
            />
            <Row title = "Trending Now" fetchUrl = {requests.fetchTreding}/>
            <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
            <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
            <Row title = "Horror Movies" fetchUrl = {requests.fetchHorroMovies}/>
            <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanticMovies}/>
            <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
        
          </Route>
          </div>
          </Switch>

      )}
    

      
      
      </BrowserRouter>
       
    
  );
}

export default App;
