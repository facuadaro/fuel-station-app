import { Box, Heading, Image } from "@chakra-ui/react"
import ImageShop from '../assets/img/shop.png'
import { useNavigate } from "react-router-dom"
import '../App.css'

function NavBar() {

    const navigate = useNavigate()


    const redirect = () => {
        navigate("/")
    }

    return (
        <>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center"  borderBottom="1px solid #ddd" textAlign="center">
                <Image src={ImageShop} alt="Logotipo" display="flex" justifyContent="center" width={75} margin="0, auto" cursor="pointer" onClick={redirect}/>
                <Heading as="h1" size="sm" isTruncated textTransform="uppercase" textAlign="center" color="#ff6b6b" fontWeight="900" paddingBottom="5">Gasolinera ARPC</Heading>
            </Box>
        </>
    )
}

export default NavBar