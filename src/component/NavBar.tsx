import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import { ColorModeButton } from "@/components/ui/color-mode"



const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'} >
        <Image src={logo} alt='logo' boxSize='50px' />
        <ColorModeButton />
    </HStack>
  )
}

export default NavBar