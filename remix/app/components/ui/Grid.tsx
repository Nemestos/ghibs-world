import React from "react";

export interface GridProps<T> {
  render: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => Pick<T, keyof T>;
  data: T[];
}

export default function Grid<T extends unknown>({
  render,
  data,
}: GridProps<T>) {
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        
        {data.length == 0 ?}
        
        </div>
    </div>
  );
}
