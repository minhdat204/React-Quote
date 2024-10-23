//components
import ModalAddAdvice from './components/ModalAddAdvice';
//
import { useEffect, useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//icon
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import CasinoIcon from '@mui/icons-material/Casino';
import AddIcon from '@mui/icons-material/Add';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
//textarea
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
//button
import Button from '@mui/material/Button';

function App() {
  const adviceData = [
    {id: 1, content: "Strive to be kind to yourself and others", isLike: false},
    {id: 2, content: "Set realistic goals and make time for them", isLike: false},
    {id: 3, content: "Practice gratitude and find joy in small acts of kindness", isLike: false},
    {id: 4, content: "Learn from your mistakes and grow stronger", isLike: false},
    {id: 5, content: "Embrace change and be open to new experiences", isLike: false},
    {id: 6, content: "Surround yourself with positive people and support systems", isLike: false},
    {id: 7, content: "Take care of yourself physically and mentally", isLike: false},
    {id: 8, content: "Seek professional help when needed", isLike: false},
    {id: 9, content: "Learn to appreciate the beauty in everyday life", isLike: false},
    {id: 10, content: "Be mindful of your emotions and respond appropriately", isLike: false},
  ]
  //return adviceData[Math.floor(Math.random() * adviceData.length)];
  const [adviceList, setAdviceList] = useState(() => {
    const Storage = localStorage.getItem('AdviceList');
    return Storage? JSON.parse(localStorage.getItem('AdviceList')) : adviceData;
  });
  //remove advice when component unmount
  useEffect(() => localStorage.removeItem('AdviceList'), []);
  //save adviceList to localstorage when state change
  useEffect(() => {
    localStorage.setItem('AdviceList', JSON.stringify(adviceList));
  }, [adviceList]);
  
  //key to get random advice from adviceList
  const [key, setkey] = useState(() => Math.floor(Math.random() * adviceList.length));
  const [advice, setAdvice] = useState(adviceList[key]);
  //update advice when key change
  useEffect(() => {
    //if 
    if(adviceList.length > 0)
      setAdvice(adviceList[key]);
  }, [key, adviceList]);
  
 
  //show advice ramdom
  const getAdviceRamdom = () => {
    setkey(Math.floor(Math.random() * adviceList.length));
  }
  //save advice
  const saveAdvice = () => {
    const prev = [...adviceList];
    prev[key].isLike = !prev[key].isLike;
    setAdviceList(prev);
  }
  //add advice to advicelist
  const addAdvice = (text) => {
    //test tồn tại
    if (!text) return;
    //test trùng
    if (adviceList.some(item => item.content === text)) return;
    //add advice
    
    
    setAdviceList((prev) => {
      const newAdvice = { id: adviceList.length + 1, content: text, isLike: false };
      return [...prev, newAdvice]
    })
    
    setkey(adviceList.length)
  }
  //handle add advice
  const handleAddAdvice = () => {
    const inputAddAdvice = document.getElementById('inputAdd');
    const value = inputAddAdvice.value;
    addAdvice(value);
    inputAddAdvice.value = '';
    setOpen(false);
  }
  //theme
  const [ mode, setMode ] = useState(true);
  const theme = createTheme({
    palette: {
      mode: mode? 'dark' : 'light',
      background: {
        default: mode? '#121212' : '#ffffff',
      }
    },
  });
  
  const toggleMode = () => {
    setMode((prev) => !prev);
  };
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
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
  };
  //input textarea
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
    <Box sx={{position: 'absolute', left: '10%', right: '10%'}}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
          <Card sx={{
            maxWidth: 400,
            padding: 2,
            boxShadow: 3,
            borderRadius: '10px',
            textAlign: 'center',
          }}>
          <CardContent sx="text-align: center; border-radius: 15px">
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }} color='#00ffd2' fontWeight={1000}>
            Advice#{advice.id}
            </Typography>
            <Typography gutterBottom variant="h5" component="div" fontStyle={'italic'} fontWeight={800}>
            "{advice.content}"
            </Typography>
          </CardContent>
          <Divider />
          <CardActions disableSpacing sx={{ justifyContent: 'center'}}>
            <IconButton onClick={saveAdvice} aria-label="add to favorites" sx={{color: advice.isLike? 'red': 'none'}} title='Add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton onClick={getAdviceRamdom} aria-label="random" title='Random'>
              <CasinoIcon />
            </IconButton>
            <IconButton aria-label="share" title='Share'>
              <ShareIcon />
            </IconButton>
            <IconButton onClick={() => toggleMode()} aria-label="theme change" title='Theme change'>
              { mode? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
            <IconButton onClick={handleOpen} aria-label="add advice" title='Add advice'>
              <AddIcon fontSize='medium'/>
            </IconButton>
            <IconButton aria-label="share" title='Share'>
              <FormatListBulletedIcon />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h1" marginBottom={'20px'} textAlign={'center'} gutterBottom>
                  Add new advice
                </Typography>
                <TextareaAutosize id='inputAdd' aria-label="empty textarea" placeholder="Text here" fullWidth/>
                <Box display = 'flex' justifyContent={'flex-end'} marginTop={'5px'}>
                  <Button onClick={() => handleAddAdvice()} variant="contained" size='medium' sx={{borderRadius: '8px', fontWeight: '600'}}>Add</Button>
                </Box>
              </Box>
            </Modal>
          </CardActions>
          </Card>
        </Grid>
    </ThemeProvider>
    </Box>
  );
}

export default App;
