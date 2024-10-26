import React from "react";

import { useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

//textarea
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
//button
import Button from '@mui/material/Button';
const ModalAddAdvice = (props) => {
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
    };
    //input textarea: custom base mui
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };
    
    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };
    
    const TextareaAutosize = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 100%;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
        border-color: ${blue[400]};
        }
    
        &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
        outline: 0;
        }
    `,
    );
    return (
        <>
            {/*add icon */}
            <IconButton onClick={handleOpen} aria-label="add advice" title='Add advice'>
              <AddIcon fontSize='medium'/>
            </IconButton>
            {/* modal */}
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
              {/*hiệu ứng / title, input, btn */}
              <Fade in={open}>
                <Box sx={modalStyle}>
                  <Typography id="modal-modal-title" fontWeight={'fontWeight.title'} variant="h6" component="h1" marginBottom={'20px'} textAlign={'center'} gutterBottom>
                    Your advice
                  </Typography>
                  <TextareaAutosize id='inputAdd' sx={{bgcolor: 'background.inputAddAdvices'}} aria-label="empty textarea" placeholder="What's on your mind?" fullWidth/>
                  <Box display = 'flex' justifyContent={'flex-end'} marginTop={'5px'}>
                    <Button onClick={() => { props.handleAddAdvice(); setOpen(false) } } variant="contained" size='medium' sx={{borderRadius: '8px', fontWeight: 'fontWeight.title'}}>Add</Button>
                  </Box>
                </Box>
              </Fade>
            </Modal>
        </>
    )
}

export default ModalAddAdvice;