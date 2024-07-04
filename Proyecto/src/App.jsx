import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'react-toastify/dist/ReactToastify.css'
import PageNotFound from './components/PageNotFound/PageNotFound'



function App() {
  return (
    
  <ChakraProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
      <Route path='/producto/:productId' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>    
  </ChakraProvider>
  )
}

export default App
