import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
 

  return (
    <>
    <NavBar />
    <ItemListContainer title='Tienda' />    
    </>
  )
}

export default App
