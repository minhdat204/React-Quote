//components
import ModalAddAdvice from './components/ModalAddAdvice';
import ModalListFavorites from './components/ModalListFavorites';
//
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  //khởi tạo list
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
      {id: 11, content: "Be proactive in seeking help when needed", isLike: false},
      {id: 12, content: "Be patient and persistent in your efforts", isLike: false},
      {id: 13, content: "Embrace your strengths and learn from them", isLike: false},
      {id: 14, content: "Learn to trust your instincts and intuition", isLike: false},
      {id: 15, content: "Learn to be patient and understanding in difficult situations", isLike: false},
      {id: 16, content: "Be kind to yourself and others, even when things seem difficult", isLike: false},
      {id: 17, content: "Seek support from others and your community", isLike: false},
      {id: 18, content: "Embrace your strengths and learn from them", isLike: false},
      {id: 19, content: "Learn to trust your instincts and intuition", isLike: false},
      {id: 20, content: "Learn to be patient and understanding in difficult situations", isLike: false},
      {id: 21, content: "Be kind to yourself and others, even when things seem difficult", isLike: false},
      {id: 22, content: "Take time to relax and recharge your energy", isLike: false},
      {id: 23, content: "Stay curious and keep learning throughout life", isLike: false},
      {id: 24, content: "Help others without expecting anything in return", isLike: false},
      {id: 25, content: "Celebrate small victories and progress", isLike: false},
      {id: 26, content: "Find ways to express your creativity", isLike: false},
      {id: 27, content: "Stay connected with loved ones and friends", isLike: false},
      {id: 28, content: "Engage in activities that bring you joy", isLike: false},
      {id: 29, content: "Be open to feedback and learn from it", isLike: false},
      {id: 30, content: "Practice mindfulness and live in the moment", isLike: false},
      {id: 31, content: "Learn to forgive yourself and others", isLike: false},
      {id: 32, content: "Be open to change and adapt as needed", isLike: false},
      {id: 33, content: "Focus on what you can control and let go of the rest", isLike: false},
      {id: 34, content: "Invest time in building meaningful relationships", isLike: false},
      {id: 35, content: "Nurture your passions and interests", isLike: false},
      {id: 36, content: "Stay physically active and maintain a healthy lifestyle", isLike: false},
      {id: 37, content: "Learn to manage your stress effectively", isLike: false},
      {id: 38, content: "Be honest with yourself and others", isLike: false},
      {id: 39, content: "Stay true to your values and beliefs", isLike: false},
      {id: 40, content: "Find a mentor or role model to guide you", isLike: false},
      {id: 41, content: "Keep a journal to reflect on your thoughts and feelings", isLike: false},
      {id: 42, content: "Be proactive in creating the life you want", isLike: false},
      {id: 43, content: "Learn to say no to things that do not serve you", isLike: false},
      {id: 44, content: "Find balance between work and personal life", isLike: false},
      {id: 45, content: "Engage in community service and give back", isLike: false},
      {id: 46, content: "Learn to manage your finances wisely", isLike: false},
      {id: 47, content: "Trust the process and be patient with your journey", isLike: false},
      {id: 48, content: "Practice self-compassion and be gentle with yourself", isLike: false},
      {id: 49, content: "Keep a positive attitude and outlook on life", isLike: false},
      {id: 50, content: "Remember that it's okay to ask for help", isLike: false}
];

  //create state adviceList
  const [adviceList, setAdviceList] = useState(() => {
    const Storage = localStorage.getItem('AdviceList');
    return Storage? JSON.parse(localStorage.getItem('AdviceList')) : adviceData;
  });
  //create state quản lý favoriteList
  const [favoriteList, setFavoriteList] = useState(() => {
    const Storage = localStorage.getItem('AdviceFavoriteList');
    return Storage? JSON.parse(localStorage.getItem('AdviceFavoriteList')) : [];
  });
  //remove advice when component hủy (unmount)
  useEffect(() => localStorage.removeItem('AdviceList'), []);
  //save adviceList and AdviceFavoriteList to localstorage when state change
  useEffect(() => {
    localStorage.setItem('AdviceList', JSON.stringify(adviceList));
  }, [adviceList]);
  useEffect(() => {
    localStorage.setItem('AdviceFavoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);

  //key to get random advice from adviceList
  const [key, setkey] = useState(() => Math.floor(Math.random() * adviceList.length));
  const [advice, setAdvice] = useState(adviceList.lenght > 0 ? adviceList[key] : '');
  //update advice when key or adviceList change
  useEffect(() => {
    //xử lý nếu ko có advice nào
    if(adviceList.length > 0)
      setAdvice(adviceList[key]);
  }, [key, adviceList]);

 //các hàm nghiệp vụ
  //show advice ramdom
  const getAdviceRamdom = () => {
    setkey(Math.floor(Math.random() * adviceList.length));
  }

  
  //save advice: hàm này sẽ chuyển trạng thái isLike của 1 phần tử qua lại. 
  //đồng thời thêm mới vào favoriteList nếu isLike = true và ngược lại
  //NOTE: chúng ta sẽ dùng nút này để kiểm soát việc thêm và xóa trong ds favorite list
  const saveAdvice = (index) => {
    //tạo bản sao cho 2 phần tử 1 là mảng , 2 là đối tượng trong mảng
    const adviceCopy = [...adviceList];
    const selectedAdvice = { ...adviceCopy[index] }; 
    //chuyển đổi trạng thái Like
    selectedAdvice.isLike = !selectedAdvice.isLike;
    //cập nhật bản copy mảng
    adviceCopy[index] = selectedAdvice;
    //thêm vào favoriteList nếu chưa tồn tại, xoá nếu đã tồn tại
    if(selectedAdvice.isLike) { 
      setFavoriteList((currentFavorites) => [...currentFavorites, selectedAdvice]);
    } 
    else {
      setFavoriteList((currentFavorites) => 
        currentFavorites.filter(item => item.id !== selectedAdvice.id)  // Remove if unliked
      );
    }
    //cập nhật lại adviceList
    setAdviceList(adviceCopy);
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
    //cập nhật key
    setkey(adviceList.length)
  }
  //handle add advice/ nhấn vào nút add
  const handleAddAdvice = () => {
    //lấy id của input
    const inputAddAdvice = document.getElementById('inputAdd');
    //nhận value
    const value = inputAddAdvice.value;
    addAdvice(value);
    //reset input
    inputAddAdvice.value = '';
  }
  // Share function: chức năg này sẽ share thông qua Web Share API có sẵn trong trình duyệt hiện đại
  // hàm sẽ thực chuyển hướng đến web share. Nếu không hỗ trợ, sẽ hiển thị thông báo.
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `Advice #${advice.id}`,
          text: advice.content,
        })
        .then(() => console.log('Shared successfully!'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this device.');
    }
  };
  //stage quản lý việc chuyển đổi mode sáng tối
  const [ mode, setMode ] = useState(true);
  //theme / theo dõi các thuộc tính chung
  const theme = createTheme({
    palette: {
      mode: mode? 'dark' : 'light',
      background: {
        default: mode? '#121212' : '#121212',
        box: mode? '#121212' : '#ffe6e6',
        list: mode? '#262626' : '#ffd6d6',
        list_items: mode? '#323232' : '#ffc7c7',
        inputAddAdvices: mode? '#1C2025' : '#ffffff',
      },
      adviceID: mode ? '#00ffd2' : '#B76E79',
    },
    typography: {
      fontWeight: {
        title: 600,
      },
      color: {
        adviceID: mode? '#00ffd2' : '#B76E79'
      }
    }
  });
  //hàm xử lý việc chuyển đổi mode
  const toggleMode = () => {
    setMode((prev) => !prev);
  };

  return (
    <Box sx={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1}}>
      {/*add bg động tùy từng mode*/}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: mode? 'url(/img/shootingStargif.gif)' : 'url(/img/ereshkigal-flowers.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          opacity: 0.5,
          zIndex: -1,
        }}
      />
      {/*advice box*/}
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
              padding: 2,
              boxShadow: 3,
              borderRadius: '10px',
              textAlign: 'center',
              bgcolor: 'background.box'
            }}>
              <CardContent sx={{textAlign: 'center', borderRadius: '15px'}}>
                {/*show id */}
                <Typography variant="subtitle1" sx={{ marginBottom: 1 , color: 'adviceID' }}  fontWeight={1000}>
                  Advice#{advice.id}
                </Typography>
                {/*show content và xử lý việc advice không có */}
                <Typography gutterBottom variant="h5" component="div" fontStyle={'italic'} fontWeight={800}>
                  {advice !== '' ? `"${advice.content}"` : '"Nothing here! Please create new advice"'}
                </Typography>
              </CardContent>
              {/*gạch ngang */}
              <Divider />
              <CardActions disableSpacing sx={{ justifyContent: 'center'}}>
                {/*favorite icon */}
                <IconButton onClick={() => saveAdvice(key)} aria-label="add to favorites" sx={{color: advice.isLike? 'red': 'none'}} title='Add to favorites'>
                  <FavoriteIcon />
                </IconButton>
                {/*random icon */}
                <IconButton onClick={getAdviceRamdom} aria-label="random" title='Random'>
                  <CasinoIcon />
                </IconButton>
                {/*share icon*/}
                <IconButton onClick={handleShare} aria-label="share" title='Share'>
                  <ShareIcon />
                </IconButton>
                {/*mode icon + chuyển đổi icon tùy vào mode*/}
                <IconButton onClick={() => toggleMode()} aria-label="theme change" title='Theme change'>
                  { mode? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {/*component*/}
                <ModalAddAdvice handleAddAdvice={handleAddAdvice}/>
                <ModalListFavorites favoriteList={favoriteList} saveAdvice={saveAdvice}/>
              </CardActions>
            </Card>
          </Grid>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default App;
