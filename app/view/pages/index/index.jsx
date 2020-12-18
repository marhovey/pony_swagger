import React, {useState, useCallback} from 'react';
import { Switch } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './index.scss';

export default function Index(props) {

  const [accountEl, setAccountEl] = useState(null)

  const openMenu = useCallback(
    (e) => {
      setAccountEl(e.currentTarget)
    },
    [],
  )

  const closeMenu = useCallback(
    () => {
      setAccountEl(null)
    },
    [],
  )

  return(
    <div className="index">
      <AppBar>
        <Container maxWidth="lg">
          <Toolbar className="top-bar">
            <Typography variant="h6" noWrap>
              Material-UI
            </Typography>
            <div className="search-box">
              <div className="search">
                <div className="search-icon">
                  <SearchIcon fontSize="small" />
                </div>
                <InputBase
                  className="search-ipt"
                  placeholder="搜索"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </div>
            <div className="top-bar-right-actions">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(e) => openMenu(e)}
                color="inherit"
                >
                <AccountCircle />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={accountEl}
                keepMounted
                open={Boolean(accountEl)}
                onClose={() => closeMenu()}
              >
                <MenuItem onClick={() => closeMenu()}>
                  <ExitToAppIcon/>
                  退出登录
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="container">
        <Container maxWidth="lg">
          <Switch>
            {renderRoutes(props.route.routes)}
          </Switch>
        </Container>
      </div>
    </div>
  )
}