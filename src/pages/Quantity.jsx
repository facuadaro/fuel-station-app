import { Box, Button, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Quantity() {


    
    
    const numbers = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9"
    ]
    const navigate = useNavigate()
    
    const [counter, setCounter] = useState("")
    
    useEffect (() => (
        localStorage.setItem("quantity", counter)
    ), [counter])
    const sumCounter = (number) => {
        setCounter(counter+number)
    }

    const clearCounter = () => {
        setCounter("")
    }

  return (



    <>
        <Grid marginBottom={5}>
            <Heading size="lg">
                Pulse importe
            </Heading>
            <Heading size="lg" fontWeight="800">
                {counter ? <>{counter}$</> : <>0$</>}
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {numbers.map((number => (
                    <GridItem key={number} w="100%" h="20" bgGradient="linear(to-r, gray.200, gray.500)" display="flex" alignItems="center" justifyContent="center" fontWeight="700" boxShadow="0 4px 10px -3px rgb(117, 117, 117)" cursor="pointer" _hover={{shadow: "2xl"}} onClick={() => sumCounter(number)} fontSize="40px">{number}</GridItem>
                )))}
            </Grid>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} marginTop="30px">
            <GridItem w="100%" h="20" bgGradient="linear(to-r, gray.200, gray.500)" colSpan={1} display="flex" justifyContent="center" alignItems="center" cursor="pointer" fontSize="40px" fontWeight="700" boxShadow="0px 4px 10px -3px rgb(117, 117, 117)" _hover={{shadow: "2xl"}} onClick={() => sumCounter(0)}>
                0
            </GridItem>
            <GridItem w="100%" h="20" colSpan={2} boxShadow="0px 4px 10px -3px rgb(117, 117, 117)" fontSize="40px" fontWeight="700" cursor="pointer" bg="yellow" textAlign="center" display="flex" justifyContent="center" alignItems="center" _hover={{shadow: "2xl"}} onClick={() => clearCounter()} > 
                Borrar
            </GridItem>
        </Grid>
        
        <Box marginTop="40px">
            <Stack direction="row" spacing={4} cursor="pointer" display="flex" justifyContent="space-between">
                <Button leftIcon={<ArrowBackIcon />} colorScheme='teal' variant="outline" size="lg" onClick={() => navigate("/method-payment")}>Volver atras</Button>
                <Button rightIcon={<ArrowForwardIcon/>} colorScheme='teal' variant="solid" size="lg" onClick={() => navigate("/resume")}>Continuar</Button>
            </Stack>
        </Box>
    </>
  )
}

export default Quantity