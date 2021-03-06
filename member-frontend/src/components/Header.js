import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ isLogin, isAdmin }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to={'/'} className="navbar-brand">
          Home
        </Link>
        <Nav className="me-auto">
          {isLogin ? (
            <Link
              className="nav-link"
              to="/"
              onClick={() => {
                sessionStorage.clear();
                window.location.replace('/');
              }}
            >
              Logout
            </Link>
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
          {!isAdmin && isLogin ? (
            <Link className="nav-link" to="/user/myInfo">
              My Info
            </Link>
          ) : isAdmin ? (
            <Link className="nav-link" to="/user/list/1">
              Member
            </Link>
          ) : null}
          {isLogin ? (
            <Link className="nav-link" to="/board/list/1">
              Board
            </Link>
          ) : (
            <Link className="nav-link" to="/join">
              Join
            </Link>
          )}
          {isAdmin ? (
            <Link className="nav-link" to="/admin/static">
              Statics
            </Link>
          ) : null}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
