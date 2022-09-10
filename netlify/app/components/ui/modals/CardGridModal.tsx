import { Modal } from "@mantine/core";
import type { CardGridProps } from "../CardGrid";
import CardGrid from "../CardGrid";

export interface CardGridModalProps {
  onClose: () => void;
  title: string;
}

export default function CardGridModal<T extends unknown>({
  onClose,
  title,
  ...cardGridProps
}: CardGridProps<T> & CardGridModalProps) {
  return (
    <Modal opened={true} onClose={onClose} title={title} size="70%">
      <CardGrid {...cardGridProps} />
    </Modal>
  );
}
