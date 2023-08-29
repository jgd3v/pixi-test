import { styled } from '@mui/system';
import { Card } from '@mui/material';

const CardStyled = styled(Card)(({ theme }) => ({
  padding: 0,
  '& .MuiCardContent-root': {
    width: '100%',
    position: 'relative',
    padding: 0,
    '& .cashtout-displayed': {
      position: 'absolute',
      bottom: '260px',
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('sm')]: {
        bottom: '280px',
      },
      [theme.breakpoints.up('md')]: {
        bottom: '110px',
      },
      [theme.breakpoints.up('lg')]: {
        bottom: '130px',
      },
    },
  },
  '& .MuiCardActions-root': {
    display: 'flex',
    justifyContent: 'space-between',
    '& .MuiButton-root': {
      padding: '5px',
      margin: theme.spacing(0.5),
      '&:first-of-type': {
        marginLeft: 0,
      },
      '&:last-of-type': {
        marginRight: 0,
      },
    },
  },
}));

export default CardStyled;
