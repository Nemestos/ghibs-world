/* eslint-disable jsx-a11y/anchor-has-content */
import { Anchor, NavLink } from "@mantine/core";
import { BiHomeCircle, BiMovie } from "react-icons/bi";
import { GiCharacter } from "react-icons/gi";

export default function NavLinks() {
  return (
    <>
      <NavLink label="Home" icon={<BiHomeCircle size={16} />} />
      <NavLink label="Movies" icon={<BiMovie size={16} />} />

      <NavLink label="Characters" icon={<GiCharacter size={16} />} />
    </>
  );
}
