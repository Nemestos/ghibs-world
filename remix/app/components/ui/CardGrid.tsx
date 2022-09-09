import { Grid } from "@mantine/core";
import React from "react";

export interface CardGridProps<T> {
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => any;
  data: T[];
}

export default function CardGrid<T extends unknown>({
  render,
  keyExtractor,
  data,
}: CardGridProps<T>) {
  return (
    <Grid>
      {data.map((item) => (
        <Grid.Col key={keyExtractor(item)} md={6} lg={3}>
          {render(item)}
        </Grid.Col>
      ))}
    </Grid>
  );
}
