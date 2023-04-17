import './App.css';
import './global.css';
import React from 'react';
// import styled from 'styled-components';
import {Stack, Button} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

// const Red = styled.h3`
//     color: red;
// `;
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  const RedditTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  
  const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      padding: '4px !important', // override inline-style
    },
  });



function App() {
    return (
        <>
            <div className='seulki'>
                <h1 classname='sTitle'>여기에 슬기라고 적을거야</h1>
            </div>
            <div classname='mui-seulki'>
                <h2>여기에 mui 넣을거야</h2>
            </div>
            {/* <Red>
                <h3>여기에 스타일 적용할거야</h3>
            </Red> */}
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Box
            component="form"
            noValidate
            sx={{
                display: 'grid',
                gridTemplateColumns: { sm: '1fr 1fr' },
                gap: 2,
            }}
            className="box_style"
            >
                <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Bootstrap
                    </InputLabel>
                    <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
                </FormControl>
                <RedditTextField
                    label="Reddit"
                    defaultValue="react-reddit"
                    id="reddit-input"
                    variant="filled"
                    style={{ marginTop: 11 }}
                />
                <CssTextField label="Custom CSS" id="custom-css-outlined-input"/>
                <ValidationTextField
                    label="CSS validation style"
                    required
                    variant="outlined"
                    defaultValue="Success"
                    id="validation-outlined-input"
                />
                
            </Box>
            <div className="div_style">
              <InputLabel>label</InputLabel>
              <Input />
            </div>
        </>
    );
}

export default App;