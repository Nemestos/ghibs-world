/* eslint-disable jsx-a11y/anchor-has-content */
import { NavLink } from "@mantine/core";
import { Link, useLocation } from "@remix-run/react";
import { BiHomeCircle, BiLocationPlus, BiMovie } from "react-icons/bi";
import { GiCharacter } from "react-icons/gi";

export default function NavLinks() {
  const location = useLocation();

  const isCurrentLink = (route: string) => location.pathname == route;

  return (
    <>
      <Link to="/">
        <NavLink
          active={isCurrentLink("/")}
          label="Home"
          icon={<BiHomeCircle size={16} />}
        />
      </Link>

      <Link to="/movies">
        <NavLink
          active={isCurrentLink("/movies")}
          label="Movies"
          icon={<BiMovie size={16} />}
        />
      </Link>

      <Link to="/characters">
        <NavLink
          active={isCurrentLink("/characters")}
          label="Characters"
          icon={<GiCharacter size={16} />}
        />
      </Link>
      <Link to="/locations">
        <NavLink
          active={isCurrentLink("/locations")}
          label="Locations"
          icon={<BiLocationPlus size={16} />}
        />
      </Link>
    </>
  );
}
