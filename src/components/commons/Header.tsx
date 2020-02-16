import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Movie';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppIcon = styled(MenuIcon)`
  flex-grow: 1;
  margin: 2px 5px 2px 5px;
  vertical-align: middle;
`;

const StyledAppName = styled(Typography)`
  flex-grow: 1;
  margin: 2px 5px 2px 5px;
  vertical-align: middle;
`;

const StyledTypography = styled(Typography)`
  margin: 2px 10px 2px 5px;
  width: spacing(7);
  vertical-align: middle;
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
          <StyledAppIcon />
        </IconButton>
        <StyledAppName variant="h6"><StyledLink to="/">Movie Service</StyledLink></StyledAppName>
        <StyledTypography variant="h6"><StyledLink to="/">Top</StyledLink></StyledTypography>
        <StyledTypography variant="h6"><StyledLink to="/bookmark">Bookmarks</StyledLink></StyledTypography>
        {/* <StyledTypography variant="h6"><StyledLink to="/bpage">B</StyledLink></StyledTypography> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
