import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    
  <ChakraProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>    
  </ChakraProvider>
  )
}

export default App
