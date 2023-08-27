import { useRef, useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Container } from '@mui/material';
import useResize from '../hooks/useResize';
import Header from '../components/Header';
import Animation from '../components/Animation';

const HomePage = () => {
  const refContainer = useRef(null);
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const [clientWidth] = useResize(refContainer.current);
  const [appWidth, setAppWidth] = useState(clientWidth / 2);

  useEffect(() => {
    setAppWidth(!isSmallDevice ? clientWidth - 48 : clientWidth);
  }, [clientWidth, isSmallDevice]);

  return (
    <>
      <Header />
      <Container
        ref={refContainer}
        sx={{ padding: isSmallDevice ? theme.spacing(1) : theme.spacing(2), height: 600 }}
        maxWidth="lg"
      >
        <Animation width={appWidth} height={600} />
      </Container>
    </>
  );
};

export default HomePage;
