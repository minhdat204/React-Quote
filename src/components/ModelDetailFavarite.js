import React from "react";
//
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//modal
import Modal from '@mui/material/Modal';
//list
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Fade from '@mui/material/Fade';

import SearchIcon from '@mui/icons-material/Search';
//pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const ModalDetailFavorite = (props) => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '15px',
        bgcolor: 'background.box',
        textAlign: 'center',
    };

    //code base
    const fullContent = props.advice.content;
    const limitContent = props.advice.content.substring(0,50);
    const ItemShow = `"${limitContent}${fullContent !== limitContent? '...' : '"'}`
    return (
        <>
        <ListItemButton onClick={handleOpen} role={undefined} dense>
            <ListItemText id={props.labelId} primary={ItemShow} />
        </ListItemButton>

        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            backdrop ={{
            timeout: 500,
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Fade in={open}>
            <Box sx={modalStyle}>
                <Typography variant="subtitle1" sx={{ marginBottom: 1 }} color='#00ffd2' fontWeight={1000}>
                    Advice#{props.advice.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" fontStyle={'italic'} fontWeight={800}>
                    "{fullContent}"
                </Typography>
            </Box>
            </Fade>
        </Modal>
        </>
    );
}

export default ModalDetailFavorite