import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import React from 'react'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
    }
const SortSelector = ({onSelectSortOrder, sortOrder}:Props) => {

    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-released", label: "Release date" },
        // { value: "-metacritic", label: "Popularity" },
        // { value: "-rating", label: "Average rating" },
      ];

        const currentSortOrder = sortOrders.find(order => order.value === sortOrder);
  return (
     <MenuRoot>
          <MenuTrigger asChild>
            <Button variant={"subtle"}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </Button>
          </MenuTrigger>
          <MenuContent>
            {sortOrders.map(order => 
              <MenuItem onClick={()=> onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
          </MenuContent>
        </MenuRoot>
  )
}

export default SortSelector