import loadable from '@loadable/component';

interface IconProps {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconComponent = loadable(({ name }: IconProps | any) => import(`../../assets/icons/${name}-icon.svg`), {
  fallback: <div>Icon loading...</div>,
  resolveComponent: (component) => component.ReactComponent || null,
  cacheKey: (props) => props.name,
});

export default IconComponent;
