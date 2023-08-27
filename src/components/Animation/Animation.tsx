import { useEffect, useMemo, useState } from 'react';
import { Box, Button, CardActions, CardContent, InputAdornment } from '@mui/material';
import { Stage, Sprite, Container } from '@pixi/react';
import useBreakPoint from '../../hooks/useBreakpoint';
import stadium from '../../assets/stadium.png';
import player from '../../assets/player.png';
import { ReactComponent as ZoomIcon } from '../../assets/icons/zoom-icon.svg';
import { ReactComponent as RefreshIcon } from '../../assets/icons/refresh-icon.svg';
import { ReactComponent as VolumeIcon } from '../../assets/icons/volume-icon.svg';
import { ReactComponent as StatsIcon } from '../../assets/icons/stats-icon.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info-icon.svg';
import { ReactComponent as DividerNumber } from '../../assets/icons/divider-number.svg';
import { ReactComponent as CurrencyIcon } from '../../assets/icons/currency-icon.svg';
import { ReactComponent as RemoveIcon } from '../../assets/icons/remove-icon.svg';
import BoardStyled from './Styled/Board.styled';
import CardStyled from './Styled/Card.styled';
import TextFieldStyled from './Styled/TextField.styled';
import ToggleContainerStyled from './Styled/ToggleContainer.styed';
import FlexStyled from '../Common/Flex.styled';

interface AnimationProps {
  width: number;
  height: number;
}

interface ISpriteConfigProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

const AnimationComponent: React.FC<AnimationProps> = ({ width, height }) => {
  const [toggleOption, setToggleOption] = useState(0);
  const mobileValues = useMemo(
    () => ({
      stadium: {
        width: width * 2,
        height,
        y: -100,
      },
      player: {
        width: 160,
        height: 180,
        y: height - 420,
      },
    }),
    [width, height]
  );
  const [configSprite, setConfigSprite] = useState<Record<string, ISpriteConfigProps>>({
    ...mobileValues,
  });
  const toggleButtonsText = ['Normal', 'Auto', 'Free'];
  const boardButtons = {
    amount: [
      { content: <DividerNumber width={20} height={20} />, sx: null },
      {
        content: '2X',
        sx: { color: '#FFFF' },
      },
    ],
  };
  const isSmallDevice = useBreakPoint(['sm'], 'up');
  const isMediumlDevice = useBreakPoint(['md'], 'up');

  useEffect(() => {
    if (isSmallDevice) {
      setConfigSprite(mobileValues);
    } else if (isMediumlDevice) {
      console.log('medium');
      setConfigSprite({
        stadium: { ...mobileValues.stadium, y: -4000 },
        player: { ...mobileValues.player },
      });
    } else {
      setConfigSprite({ stadium: { width, height, y: 0 }, player: { y: 210, width: 230, height: 250 } });
    }
  }, [isSmallDevice, isMediumlDevice, width, height, mobileValues]);

  return (
    <CardStyled elevation={5}>
      <CardContent sx={{ height }}>
        <Stage width={width} height={height}>
          <Container>
            <Sprite image={stadium} width={width} height={height} y={0} />
            <Sprite image={player} width={160} height={180} y={height - 320} />
          </Container>
        </Stage>
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
              value={200}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CurrencyIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FlexStyled padding={0}>
              {boardButtons.amount.map((button, index: number) => (
                <Button color="success" variant="outlined" sx={button.sx} key={index} fullWidth>
                  {button.content}
                </Button>
              ))}
            </FlexStyled>
          </FlexStyled>
          <FlexStyled className="item">
            <TextFieldStyled
              label="AUTOCASH (MULTIPLIER)"
              value={200}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <RemoveIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FlexStyled padding={0}>
              <Button variant="contained" fullWidth>
                CASHOUT 21.22X
              </Button>
            </FlexStyled>
          </FlexStyled>
        </BoardStyled>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary">
          <ZoomIcon />
        </Button>
        <Box>
          <Button variant="outlined" color="secondary">
            <RefreshIcon />
          </Button>
          <Button variant="outlined" color="secondary">
            <VolumeIcon />
          </Button>
          <Button variant="outlined" color="secondary">
            <StatsIcon />
          </Button>
          <Button variant="outlined" color="secondary">
            <InfoIcon />
          </Button>
        </Box>
      </CardActions>
    </CardStyled>
  );
};

export default AnimationComponent;
