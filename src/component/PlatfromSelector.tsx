import usePlatforms from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const PlatfromSelector = () => {

  const {data, error} = usePlatforms();

  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant={"subtle"}>Platform</Button>
      </MenuTrigger>
      <MenuContent>
        {data.map(platform => 
          <MenuItem key={platform.id} value={platform.id.toString()} >{platform.name}</MenuItem>)}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatfromSelector;
