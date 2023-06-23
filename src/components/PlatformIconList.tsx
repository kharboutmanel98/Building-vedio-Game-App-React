
import { Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux} from 'react-icons/fa';
import { MdPhoneIphone } from "react-icons/md";


interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
        {platforms.map((platform) => <Text>{platform.name}</Text>)}
    </>
    
  )
}

export default PlatformIconList