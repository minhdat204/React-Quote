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
            
            <ModalAddAdvice handleAddAdvice={handleAddAdvice}/>
            
            <IconButton aria-label="share" title='Share'>
              <FormatListBulletedIcon />
            </IconButton>

          </CardActions>
          </Card>
        </Grid>
    </ThemeProvider>
    </Box>
  );
}

export default App;
