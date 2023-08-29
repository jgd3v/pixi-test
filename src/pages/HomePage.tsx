import { useRef } from 'react';
import { useTheme, Container } from '@mui/material';
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import Table from '../components/Table';
import { useResize } from '../hooks/resize';
import { useScreenWidth } from '../hooks/screenWidth';
import { usePlay } from '../hooks/play';

const HomePage = () => {
  const refContainer = useRef(null);
  const theme = useTheme();
  const currentScreenWidth = useScreenWidth();
  const isSmallDevice = ['xs', 'sm'].includes(currentScreenWidth);
  const [clientWidth] = useResize(refContainer.current);
  usePlay();

  return (
    <>
      <Header />
      <Container ref={refContainer} sx={{ padding: isSmallDevice ? theme.spacing(1) : theme.spacing(2) }} maxWidth="lg">
        <GameCard width={clientWidth} height={600} screenSize={currentScreenWidth} />
        <Table />
      </Container>
    </>
  );
};

export default HomePage;
