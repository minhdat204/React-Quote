import React from "react";
//component detail favorites list
import ModalDetailFavorite from "./ModelDetailFavarite";
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

import Fade from '@mui/material/Fade';

import SearchIcon from '@mui/icons-material/Search';
//pagination
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
const ModalListFavorites = (props) => {
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: { xs: '90%', sm: 600 },
      border: '0px solid #000',
      boxShadow: 24,
      p: 4,
      borderRadius: '15px',
      bgcolor: 'background.box',
    };
    //search bar
    //...

    //code base
    //advice favorites list
    
    //search favorite result/ nếu không search thì trả về mảng mặc định
    const [text, setText] = useState('');
    const searchAdviceFavorite = props.favoriteList.filter(advice => advice.content.toLowerCase().includes(text.toLowerCase()));//search realtime
    //pagination / phân trang
    const itemsCount = searchAdviceFavorite.length;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(itemsCount / itemsPerPage);
    const [page, setPage] = useState(1);
    //xử lý trên search result/ cắt trang / mỗi trang 5 item
    const itemsOnPage = searchAdviceFavorite.slice(itemsPerPage * (page - 1), itemsPerPage * page);
    //xử lý vc click vào số trên pagination bar
    const hanldeClickPage = (e, page) => {
      setPage(page);
    }

    return (
        <>
            {/*líst icon */}
            <IconButton onClick={handleOpen} aria-label="list favorites" title='List favorites'>
              <FormatListBulletedIcon />
            </IconButton>

            {/*open modal */}
            <Modal
              open={open}
              onClose={handleClose}
              closeAfterTransition
              backdrop ={{
                timeout: 500,
              }}
              disableEnforceFocus
              disableAutoFocus
              disableRestoreFocus
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* modal content */}
              {/*hiệu ứng khi đóng mở*/}
              <Fade in={open}> 
                <Box sx={modalStyle}>
                    {/*Title */}
                    <Typography id="modal-modal-title" fontWeight={'fontWeight.title'} variant="h6" component="h1" marginBottom={'20px'} textAlign={'center'} gutterBottom>
                    List Favorites
                    </Typography>
                    {/* search bar */}
                    <TextField 
                    onChange={(e) => setText(e.target.value)}
                    id="outlined-search" placeholder="Search…" type="search" 
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      },
                    }}
                    size="small"
                    fullWidth
                    sx={{
                      marginBottom: '10px', 
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        bgcolor: 'background.inputAddAdvices',
                      },
                    }}
                    />
                    {/* list favorite / duyêt từng phần tử trong itemsOnPage*/}
                    <List sx={{ width: '100%', bgcolor: 'background.list', borderRadius: '10px', marginBottom: '5px' }}>
                      {/* nếu không có bất kỳ favorite nào */}
                        {itemsOnPage.length <= 0 ? 
                          <Typography 
                            textAlign={'center'} 
                            fontSize={15} 
                            fontWeight={'fontWeight.title'}
                            >Nothing here!</Typography>
                          : null
                        }
                      {/* nếu có bất kì favorite nào */}
                        {itemsOnPage.map((advice, index) => {
                          const labelId = `#advice-${advice.id}`;
                            return (
                                <>
                                <ListItem
                                    key={index}
                                    secondaryAction={
                                    <IconButton edge="end" onClick={() => props.saveAdvice(advice.id - 1)} aria-label="add to favorites" sx={{color: advice.isLike? 'red': 'none'}} title='Add to favorites'>
                                      <FavoriteIcon />
                                    </IconButton>
                                    }
                                    sx={{bgcolor: (index % 2 === 0) ? 'none' : 'background.list_items'}}
                                    disablePadding
                                >
                                    {/*component*/}
                                    <ModalDetailFavorite labelId={labelId} advice={advice}/>
                                </ListItem>
                                </>
                            );
                        })}
                    </List>
                    {/*pagination bar*/}
                    <Stack spacing={2} alignItems={'center'}>
                        <Pagination count={totalPages} page={page} onChange={hanldeClickPage}/>
                    </Stack>
                  </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default ModalListFavorites