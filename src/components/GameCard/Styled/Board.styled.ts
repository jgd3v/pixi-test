import { styled } from '@mui/system';
import board from '../../../assets/board.svg';
import boardDesktop from '../../../assets/board-desktop.svg';

const BoardStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  background: `url(${board}) no-repeat`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  width: '100%',
  height: '260px',
  position: 'absolute',
  bottom: '0',
  padding: theme.spacing(1),
  flexFlow: 'column',
  justifyContent: 'flex-end',
  [theme.breakpoints.up('sm')]: {
    height: '280px',
  },
  [theme.breakpoints.up('md')]: {
    background: `url(${boardDesktop}) no-repeat`,
    backgroundSize: 'cover',
    flexFlow: 'row',
    height: '105px',
    padding: `40px 50px 15px`,
    gap: '10px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '130px',
    padding: `50px 50px 15px`,
  },
  '& .item': {
    padding: '6px 15px',
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
  },
}));

export default BoardStyled;
