import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/images (5).jpg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px' />
        <Text> NavBar </Text>
    </HStack>
  )
}

export default NavBar