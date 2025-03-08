import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  ListIndicator,
  ListRoot,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner />;
  return (
    <>
    <Heading fontSize={"2xl"} marginBottom={2}>
      Genres
    </Heading>
    <ListRoot>
      {data.map((genre) => (
        <ListIndicator key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              objectFit={"cover"}
              src={getCroppedImgUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="ghost"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListIndicator>
      ))}
    </ListRoot>
    </>
  );
};

export default GenreList;
