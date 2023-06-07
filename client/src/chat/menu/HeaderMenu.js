import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AccountContext } from '../../context/AccountProvider';

const HeaderMenu=({setOpenDrawer})=>{

const [open, setOpen]=React.useState(null);

const {setAccount}=React.useContext(AccountContext);

const handleClose=()=>{
    setOpen(null);
}

const handleClick=()=>{
    setOpen(true);
}

return (
    <>
        <MoreVertIcon onClick={handleClick} />
        <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleClose(); setOpenDrawer(true); }}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
);
}

export default HeaderMenu;