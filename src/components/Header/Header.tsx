import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Currency } from '../../assets/icons/currency-icon.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { Button } from '@mui/material';
import HeaderStyled from './Header.styled';

const HeaderComponent = () => {
  return (
    <HeaderStyled>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="buttons-container">
        <Button color="secondary" variant="outlined">
          <Currency />
          420.000
        </Button>
        <Button variant="contained">DEPOSIT</Button>
        <Button color="secondary" variant="outlined">
          <User />
        </Button>
      </div>
    </HeaderStyled>
  );
};

export default HeaderComponent;
