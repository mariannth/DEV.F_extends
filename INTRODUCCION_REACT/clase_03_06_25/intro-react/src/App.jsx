import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'
import Timer from './Components/Timer'
import ConditionalSquare from './Components/ConditionalSquare'
import SquareContainer from './Components/SquareContainer'
import FocusInput from './Components/FocusInput'
import Parent from './Components/useCallbackExample'
import ContadorReducer from './Components/ContadorReducer'
import Nav from './Components/Nav';
import User from './Components/User';

const alt = "cat-image"

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <>
      <BrowserRouter>
        <h1>Este es mi primer componente:</h1>
        <Card 
          src={"https://s3.abcstatics.com/abc/www/multimedia/sociedad/2024/07/11/gato-RaZLibek03KjY2lBzGD2qEN-1200x840@diario_abc.jpg"} 
          alt={alt} 
          text={"Gato 1"}
        />
        <Card 
          src={"https://media.es.wired.com/photos/657cb5b81e17b099f8f9e15c/16:9/w_3008,h_1692,c_limit/gatos%20172050389.jpg"} 
          alt={alt}
          text={"Gato 2"}
        />
        <Card 
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYWplrvvfeRbtQSS1y5NC-rNV2lFjxUiO9g&s"} 
          alt={alt}
          text={"Gato 3"}
        />

        <Nav />
        
        <Routes>
          <Route path='/' element={() => <h1>Hola</h1>}/>
          <Route path='/Counter' element={<Counter counter={counter} setCounter={setCounter}/>}/>
          <Route path='/FilterableList' element={<FilterableList />}/>
          <Route path='/Timer' element={<Timer />}/>
          <Route path='/User/:userId' element={ <User /> } />
          <Route path='/ConditionalSquare' element={<ConditionalSquare />}/>
          <Route path='/SquareContainer' element={<SquareContainer />}/>
          <Route path='/FocusInput' element={<FocusInput />}/>
          <Route path='/Parent' element={<Parent />}/>
          <Route path='/ContadorReducer' element={<ContadorReducer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App