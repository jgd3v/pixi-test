import { styled } from '@mui/system';
import { Grid } from '@mui/material';

const GridStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}));

GridStyled.defaultProps = {
  container: true,
  spacing: 1,
};

export default GridStyled;
