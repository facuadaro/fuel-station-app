import './App.css'
import { Box, Button, Container } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Surtidor from './pages/Surtidor'
import Resume from './pages/Resume'
import Quantity from './pages/Quantity'
import Product from './pages/Product'
import MethodPayment from './pages/MethodPayment'

function App() {

  return (
    <Box w="100%" h="100vh">
      <NavBar />
      <Container paddingTop={10}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surtidor' element={<Surtidor />} />
          <Route path='/product' element={<Product />} />
          <Route path='/method-payment' element={<MethodPayment />} />
          <Route path='/quantity' element={<Quantity />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
