import { ChangeEvent, useState } from 'react';
import { Box, Button, CardActions, CardContent, InputAdornment } from '@mui/material';
import Animation from '../Animation';
import BoardStyled from './Styled/Board.styled';
import CardStyled from './Styled/Card.styled';
import TextFieldStyled from './Styled/TextField.styled';
import ToggleContainerStyled from './Styled/ToggleContainer.styed';
import FlexStyled from '../Common/Flex.styled';
import IconComponent from '../Common/IconComponent';
import { useGame } from '../../hooks/game';
import { STATUS_GAME } from '../../utils/types';
import { useAppDispatch } from '../../hooks/store';
import { bet } from '../../store/reducers/game.reducer';

interface IGameCardProps {
  width: number;
  height: number;
  screenSize: string;
}

const GameCardComponent: React.FC<IGameCardProps> = (props) => {
  const userName = `USER_${new Date().getTime()}`;
  const game = useGame();
  const dispatch = useAppDispatch();
  const [toggleOption, setToggleOption] = useState(0);
  const [amount, setAmount] = useState('1');
  const [multiplier, setMultiplier] = useState('1');
  const disabledBetActions = game.hasBetActive || game.status === STATUS_GAME.GRAPHING;
  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value);
  const onMultiplierChange = (e: ChangeEvent<HTMLInputElement>) => setMultiplier(e.target.value);
  const onBet = () => dispatch(bet({ amount, multiplier, userName }));
  const toggleButtonsText = ['Normal', 'Auto', 'Free'];
  const boardButtons = {
    amount: [
      { content: <IconComponent name="divider-number" width={20} height={20} />, sx: null },
      {
        content: '2X',
        sx: { color: '#FFFF' },
      },
    ],
  };

  return (
    <CardStyled elevation={5}>
      <CardContent sx={{ height: props.height }}>
        <Animation {...props} currentStatus={game.status} />
        <BoardStyled>
          <FlexStyled className="item">
            <ToggleContainerStyled>
              {toggleButtonsText.map((value: string, index: number) => (
                <Button
                  variant={toggleOption === index ? 'contained' : 'text'}
                  color="success"
                  fullWidth
                  key={index}
                  sx={{ color: toggleOption === index ? '#0F1821' : '#FFF' }}
                  onClick={() => setToggleOption(index)}
                >
                  {value}
                </Button>
              ))}
            </ToggleContainerStyled>
          </FlexStyled>
          <FlexStyled className="item">
            <TextFieldStyled
              label="AMOUNT"
              value={amount}
              onChange={onAmountChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconComponent name="currency" />
                  </InputAdornment>
                ),
              }}
              disabled={disabledBetActions}
            />
            <FlexStyled padding={0}>
              {boardButtons.amount.map((button, index: number) => (
                <Button
                  color="success"
                  variant="outlined"
                  sx={button.sx}
                  key={index}
                  fullWidth
                  disabled={disabledBetActions}
                >
                  {button.content}
                </Button>
              ))}
            </FlexStyled>
          </FlexStyled>
          <FlexStyled className="item">
            <TextFieldStyled
              label="AUTOCASH (MULTIPLIER)"
              value={multiplier}
              onChange={onMultiplierChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconComponent name="remove" />
                  </InputAdornment>
                ),
              }}
              disabled={disabledBetActions}
            />
            <FlexStyled padding={0}>
              <Button
                variant="contained"
                fullWidth
                disabled={!game.hasBetActive && game.status === 'GRAPHING'}
                onClick={onBet}
              >
                {game.hasBetActive ? 'CASHOUT' : 'ENTER ROUND'}
              </Button>
            </FlexStyled>
          </FlexStyled>
        </BoardStyled>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary">
          <IconComponent name="zoom" />
        </Button>
        <Box>
          <Button variant="outlined" color="secondary">
            <IconComponent name="refresh" />
          </Button>
          <Button variant="outlined" color="secondary">
            <IconComponent name="volume" />
          </Button>
          <Button variant="outlined" color="secondary">
            <IconComponent name="stats" />
          </Button>
          <Button variant="outlined" color="secondary">
            <IconComponent name="info" />
          </Button>
        </Box>
      </CardActions>
    </CardStyled>
  );
};

export default GameCardComponent;
