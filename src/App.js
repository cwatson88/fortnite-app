import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import fortniteWeapons from './gunStats';
import WeaponTable from './WeaponTable';
import CompareWeapons from './CompareWeapons';
import PlayerStyleProfile from './PlayerStyleProfile';

const logo = 'https://i.ytimg.com/vi/wGB1aLDR2Es/maxresdefault.jpg';

const weaponList = fortniteWeapons.map(weapons =>
  Object.values(weapons));


const App = () => (

      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fortnite Gunz</h1>
        </header>
        <div>
        <CompareWeapons weaponList = {weaponList} weaponTypes = {fortniteWeapons}></CompareWeapons>
        </div>
        <div>
          <PlayerStyleProfile/>
        </div>
        <div className="weapon--table">
          <WeaponTable weaponList = {weaponList} weaponTypes = {fortniteWeapons}></WeaponTable>
        </div>
      </div>
      </MuiThemeProvider>
);

export default App;
