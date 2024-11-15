import React from 'react'
import './App.css'
import CountrySearch from './components/CountrySearch/CountrySearch'
import DiceRoller from './components/DiceRoller/DiceRoller'
import QR from './components/QR Generator/QR'
import Dictionary from './components/Dictionary/Dictionary'
import RandomQuote from './components/Random/RandomQuote'


const App = () => {
  return (
    <div>
      <h1>React Assignment-1</h1>
      <CountrySearch />
      <DiceRoller />
      <QR />
      <Dictionary />
      <RandomQuote />
    </div>
  )
}

export default App
