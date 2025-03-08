import { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatfromIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";
import getCroppedImgUrl from "@/services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={"md"} overflow={"hidden"} boxShadow={"md"}>
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <CardBody>
        
        {/* {game.parent_platforms.map((platform) => <Text key={platform.platform.id}>{platform.platform.name}</Text>)} */}
        {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
        <HStack justifyContent={"space-between"}>
          <PlatfromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Heading fontSize={"xl"}>{game.name} <Emojis rating={game.rating_top}/> </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
