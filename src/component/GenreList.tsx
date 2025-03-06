import useData from "@/hooks/useData";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import { Button, HStack, Image, List, ListIndicator, ListItem, ListRoot, Spinner, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}:Props) => {
  const { data, loading, error } = useGenres();

    if (error) return null;
  if (loading) return <Spinner />;
  return (
    <ListRoot>
      {data.map((genre) => (
        <ListIndicator key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize={'32px'} borderRadius={8} src={getCroppedImgUrl(genre.image_background)} />
            <Button onClick={()=> onSelectGenre(genre)} fontSize='lg' variant='ghost'>{genre.name}</Button>
          </HStack>
        </ListIndicator>
      ))}
    </ListRoot>
  );
};

export default GenreList;
