import { Group, Text } from "@mantine/core";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export interface RatingProps {
  rating: number;
  maxStar: number;
  max: number;
}
export default function Rating({ rating, maxStar, max }: RatingProps) {
  const localRating = (rating * maxStar) / max;
  return (
    <Group spacing={"xl"}>
      {[...Array(maxStar)].map((e, i) =>
        i < localRating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />
      )}
      <Text>
        {rating}/{max}
      </Text>
    </Group>
  );
}
