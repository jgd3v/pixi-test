import { styled } from '@mui/system';
import { TextField } from '@mui/material';

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: '#BCBFC7',
    top: '15px',
    fontWeight: 'bold',
    '&.Mui-focused': {
      color: '#BCBFC7',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& .MuiOutlinedInput-input': {
      padding: '25px 14px 10px',
      fontWeight: 'bold',
      [theme.breakpoints.up('md')]: {
        padding: '20px 14px 7px',
      },
      [theme.breakpoints.up('lg')]: {
        padding: '31px 14px 10px',
      },
    },
    '& .MuiInputAdornment-root': {
      '& svg path': {
        fill: '#1EE86FCC',
      },
    },
    '& legend': { display: 'none' },
    '& fieldset': {
      top: 0,
      borderColor: theme.palette.success.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.success.main,
    },
  },
}));

TextFieldStyled.defaultProps = {
  variant: 'outlined',
  fullWidth: true,
  InputLabelProps: {
    shrink: true,
  },
  type: 'number',
  inputMode: 'numeric',
};

export default TextFieldStyled;
