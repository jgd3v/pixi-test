import { styled } from '@mui/system';

const ToggleContainerStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '10px',
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: '4px',
  '& .MuiButton-root': {
    margin: `0 ${theme.spacing(0.5)}`,
  },
}));

export default ToggleContainerStyled;
