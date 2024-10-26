import React from "react";
//
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//modal
import Modal from '@mui/material/Modal';
//list
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Fade from '@mui/material/Fade';


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
    //show full content when limit is reached
    const ItemShow = `"${limitContent}${fullContent !== limitContent? '...' : '"'}`
    return (
        <>
        {/*advice on list : khi nhấn vào sẽ mở detail */}
        <ListItemButton onClick={handleOpen} role={undefined} dense>
            <ListItemText id={props.labelId} primary={ItemShow} primaryTypographyProps={{ fontWeight: 'bold', fontStyle: 'italic' }} />
        </ListItemButton>
        {/*open modal */}
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
            {/*hiệu ứng mơe đóng/ hiển thị chi tiết advice */}
            <Fade in={open}>
                <Box sx={modalStyle}>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1, color: 'adviceID' }} fontWeight={1000}>
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