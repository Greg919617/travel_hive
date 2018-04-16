import React, { Component } from 'react';
import { app } from '../components/app';
import { saveState } from '../models/localStorage';
const api = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001/api';

const baseOptions = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  mode: 'cors',
  credentials: 'include',
};

export function addPlan(plan) {
    
    return fetch(`${api}/plan`, {
      ...baseOptions,
      method: 'POST',
      body: JSON.stringify({ 
        title: plan.title, 
        description: plan.description,   
        
       }),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => data ? data.message : null)
      .catch(error => {
        console.log(error);
      });
  }

  const onLogOut = () => {    
    app._store.dispatch({ type: "user/logOutUser" }); // alternate way to connect to the app store/state dispatcher
    saveState(undefined);  
  };

  export function getPlans(){
    return fetch(`${api}/plan`, {
      ...baseOptions,   
    })
      .then(response => {       
        if (response.ok) {
          return response.json();
        } else if (response.status === 401){
          onLogOut();          
        }
      })
      .then(data => data ? data : null)
      .catch(error => {
        console.log(error);
      });
  }  