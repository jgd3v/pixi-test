import { Sprite, useTick } from '@pixi/react';
import soccerBall from '../../assets/ball.png';
import { useMemo, useState } from 'react';

interface IBallProps {
  appHeight: number;
  appWidth: number;
  endAnimation: boolean;
}
const BallComponent: React.FC<IBallProps> = ({ appWidth, appHeight, endAnimation }) => {
  const [rotation, setRotation] = useState(0);
  const limit = useMemo(
    () => ({
      maxWidth: endAnimation ? appWidth - 70 : (appWidth - 70) / 2,
      maxHeight: endAnimation ? -appHeight : appHeight - 400,
    }),
    [appWidth, appHeight, endAnimation]
  );
  const [coords, setCoords] = useState({ x: 190, dx: 2, y: 300, dy: -10 });
  const rotate = () => setRotation((rotation) => (rotation += 0.05));
  const bounce = () => {
    setCoords((coords) => {
      if (coords.x >= 40 && coords.x < limit.maxWidth) coords.x += 1;
      if (limit.maxHeight < 0) {
        if (coords.y < appHeight - 200) coords.y += 1;
      } else if (coords.y > limit.maxHeight) coords.y -= 1;
      return coords;
    });
  };

  useTick(bounce);
  useTick(rotate);

  return (
    <Sprite image={soccerBall} y={coords.y} x={coords.x} width={40} height={40} anchor={0.5} rotation={rotation} />
  );
};

export default BallComponent;
