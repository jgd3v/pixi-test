import { useEffect, useState } from 'react';
import { Assets, Texture } from 'pixi.js';
import { Stage, Sprite, Container, AnimatedSprite } from '@pixi/react';
import { loadFileUrl } from '../../utils/helper';
import stadium from '../../assets/stadium.png';
import goal from '../../assets/goal-1.png';
import Ball from './Ball';
import { GameStates, STATUS_GAME } from '../../utils/types';

interface AnimationProps {
  width: number;
  height: number;
  screenSize: string;
  currentStatus: GameStates;
}
const AnimationComponent: React.FC<AnimationProps> = ({ width, height, screenSize, currentStatus }) => {
  const [textures, setTextures] = useState([]);
  const [currentFrames, setCurrentFrames] = useState(0);
  const [isRunnigAllAnimation, setIsRunnigAllAnimation] = useState(false);
  const [play, setPlay] = useState(false);
  const [showBall, setShowBall] = useState(false);
  const onFrameChange = () => setCurrentFrames((value) => value + 1);

  const playBall = () => {
    setPlay(false);
    setCurrentFrames(0);
    setShowBall(true);
  };

  useEffect(() => {
    const loadSprite = async (alias: string, url: string) => {
      Assets.add(alias, loadFileUrl(url));
      await Assets.load(alias);
      return Assets.get(alias);
    };

    const loadPlayerAsset = async () => {
      const assetPlayer = await loadSprite('player', 'sprites/player.json');
      setTextures(
        assetPlayer.data.animations['neymar'].map((frame: string) => Texture.from(loadFileUrl(`sprites/${frame}`)))
      );
    };
    loadPlayerAsset();
  }, []);

  useEffect(() => {
    if (currentStatus === STATUS_GAME.GRAPHING && !isRunnigAllAnimation) {
      setShowBall(false);
      setPlay(true);
    }
    if (currentStatus === STATUS_GAME.COMPLETED) {
      setIsRunnigAllAnimation(currentStatus !== STATUS_GAME.COMPLETED);
    }
  }, [currentStatus, isRunnigAllAnimation]);

  useEffect(() => {
    if (currentFrames === 5) playBall();
  }, [currentFrames]);

  const getAxisY = () => {
    if (screenSize === 'sm') return 175;
    if (screenSize === 'xs') return 185;
    return 280;
  };

  return (
    <Stage width={width} height={height} options={{ autoDensity: true }}>
      <Container position={[0, 0]}>
        {currentStatus !== STATUS_GAME.COMPLETED ? (
          <Sprite image={stadium} width={width} height={height} />
        ) : (
          <Sprite image={goal} width={width} height={height} y={0} />
        )}
        <AnimatedSprite
          isPlaying={play}
          textures={textures}
          animationSpeed={0.1}
          onFrameChange={onFrameChange}
          width={160}
          height={180}
          y={getAxisY()}
        />
        {showBall && (
          <Ball appWidth={width} appHeight={height} endAnimation={currentStatus === STATUS_GAME.COMPLETED} />
        )}
      </Container>
    </Stage>
  );
};

export default AnimationComponent;
