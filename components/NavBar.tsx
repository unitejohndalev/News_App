import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/">
              Breaking
            </Nav.Link>
            <Nav.Link as={Link} href="/search">
              Search
            </Nav.Link>
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} href="/categories/business" className={styles.onhover}>
                Business
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories/entertainment" className={styles.onhover}>
                Entertainment
          
              </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/categories/general" className={styles.onhover}>
                  General
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/categories/health" className={styles.onhover}>
                  Health
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/categories/science" className={styles.onhover}>
                  Science
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/categories/sports" className={styles.onhover}>
                  Sports
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/categories/technology" className={styles.onhover}>
                  Technology
                </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
