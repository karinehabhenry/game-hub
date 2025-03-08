import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp'
import { ColorModeButton } from "@/components/ui/color-mode"
import SearchInput from './SearchInput'



const NavBar = () => {
  return (
    <HStack padding={'10px'} >
        <Image src={logo} alt='logo' boxSize='50px' />
        <SearchInput/>
        <ColorModeButton />
    </HStack>
  )
}

export default NavBar