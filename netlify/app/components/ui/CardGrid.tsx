import { Center, Grid, Stack, TextInput, Title } from "@mantine/core";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

export interface CardGridProps<T> {
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => any;
  searchExtractor: (item: T) => string;
  data: T[];
  canSearch?: boolean;
}

export default function CardGrid<T extends unknown>({
  render,
  keyExtractor,
  searchExtractor,
  data,
  canSearch,
}: CardGridProps<T>) {
  const [filterName, setFilterName] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.currentTarget.value);
  };
  const getFinalData = () => {
    if (!filterName) {
      return data;
    }
    return data.filter((item) =>
      searchExtractor(item).toLowerCase().includes(filterName.toLowerCase())
    );
  };
  if (data.length === 0) {
    return (
      <Center>
        <Title order={1}>No Data</Title>
      </Center>
    );
  }

  return (
    <Stack>
      {canSearch && (
        <TextInput
          placeholder="Search"
          icon={<BiSearch />}
          onChange={handleSearchChange}
        />
      )}

      <Grid>
        {getFinalData().map((item) => (
          <Grid.Col key={keyExtractor(item)} md={6} lg={3}>
            {render(item)}
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
