import React from 'react'
import Search from './components/Search'

const App = () => {
  return (
        <main>
            <div className='pattern'></div>
            <div className='wrapper'>
                <header>
                    <img src="./hero.png" alt="Hero Background"></img>
                    <h1>Find <span className='text-gradient'>Movies</span>
                        You'll enjoy without the Hassle
                    </h1>
                </header>
                <Search/>
            </div>
        </main>
  )
}

export default App