import { styled } from '@mui/system';

const HeaderStyled = styled('div')((props) => ({
  display: 'flex',
  width: '100%',
  padding: props.theme.spacing(2),
  borderBottom: `2px solid ${props.theme.palette.secondary.main}`,
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  '& .logo-container': {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
  },
  '& .buttons-container': {
    '& .MuiButton-root': {
      margin: `0 ${props.theme.spacing(1)}`,
      '&:first-of-type': {
        '& svg': {
          marginRight: props.theme.spacing(0.5),
        },
        color: '#FFFFFF',
      },
    },
  },
}));

export default HeaderStyled;
