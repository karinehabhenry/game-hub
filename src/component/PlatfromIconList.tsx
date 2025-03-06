import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons/lib';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '@/hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';

interface Props {
    platforms: Platform[]    
    }

const PlatfromIconList = ({platforms}:Props) => {
    //has many numbers of keys of type string and value of type IconType
    const iconMap: {[key: string]:IconType }={
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        ios: MdPhoneIphone,
        linux: FaLinux,
        nintendo: SiNintendo,
        mac: FaApple,
        web: BsGlobe,
        android: FaAndroid
    }
  return (
    <HStack marginY={2}>
     {platforms.map((platform) => <Icon key={platform.id} as ={iconMap[platform.slug]} color={'gray.500'}/>)} 
    </HStack>
  )
}

export default PlatfromIconList