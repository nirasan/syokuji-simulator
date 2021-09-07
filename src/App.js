import React from 'react';
import {Grid} from '@material-ui/core';
import './App.css';
import ProfileForm from "./components/ProfileForm";

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <ProfileForm/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
