import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/**
 * 共通部分：Headerコンポーネント
 */

const StyledTypography = styled(Typography)`
  margin: 2px 5px 2px 5px;
`;

const StyledLink = styled(Link)`
  /* margin: 2px 5px 2px 5px; */
  color:  white;
  font-size: 1.25rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6"><StyledLink to="/">Top</StyledLink></StyledTypography>
        <StyledTypography variant="h6"><StyledLink to="/apage">A</StyledLink></StyledTypography>
        <StyledTypography variant="h6"><StyledLink to="/bpage">B</StyledLink></StyledTypography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
