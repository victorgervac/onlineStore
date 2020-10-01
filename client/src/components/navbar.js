import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Menu style={styles.navbar}>
        <Link to="/">
          <Menu.Item style={styles.item}>Home</Menu.Item>
        </Link>
        <Link to="/thingsDemo">
          <Menu.Item style={styles.item}>Things</Menu.Item>
        </Link>
        <Link to="/register">
          <Menu.Item style={styles.item}>Register</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};
const styles = {
  navbar: {
    background: "gray",
    padding: "10px",
  },
  item: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
export default NavBar;
