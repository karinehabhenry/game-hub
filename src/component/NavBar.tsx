import { HStack, Image, } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeButton } from "@/components/ui/color-mode"
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding={'10px'} >
        <Image src={logo} alt='logo' boxSize='50px' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeButton />
    </HStack>
  )
}

export default NavBar