import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

/**
 * 共通部分：Headerコンポーネント
 */

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/top">Top</Typography>
        <Typography variant="h6" component={Link} to="/apage">A</Typography>
        <Typography variant="h6" component={Link} to="/bpage">B</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
