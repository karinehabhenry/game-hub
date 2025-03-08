import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatfromSelector = ({onSelectPlatform, selectedPlatform}:Props) => {

  const {data, error} = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"subtle"}>
          {/* {selectedPlatform ? selectedPlatform.name : "Platforms"} */}
          {selectedPlatform?.name || "Platforms"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(platform => 
          <MenuItem onClick={()=> onSelectPlatform(platform)} key={platform.id} value={platform.id.toString()} >{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatfromSelector;
