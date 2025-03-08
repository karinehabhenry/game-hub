import { InputGroup } from '@/components/ui/input-group'
import { Input} from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup flex={1} startElement={<BsSearch/>}>
    <Input borderRadius={20} placeholder='Search Games..' variant={'outline'}/>
    </InputGroup>
  )
}

export default SearchInput