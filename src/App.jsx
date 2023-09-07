import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Country from './Country'

export const AppData = createContext();

function App() {
  const [theme, setTheme] = useState({
    darkMode: true
  })

  return (
    <AppData.Provider value={[theme, setTheme]}>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Main/>
          </>
        }/>
        <Route path='/countries/:name' element={
        <>
          <Header/>
          <Country/>
        </>}/>
      </Routes>
    </AppData.Provider>
  )
}

export default App
