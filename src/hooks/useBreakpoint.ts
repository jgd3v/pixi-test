import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

const useBreakPoint = (values: Breakpoint[], breakpointFn: 'up' | 'down' | 'between') => {
  const theme = useTheme();
  const up = useMediaQuery(theme.breakpoints.up(values[0]));
  const down = useMediaQuery(theme.breakpoints.down(values[0]));
  const between = useMediaQuery(theme.breakpoints.between(values[0], values[1]));
  if (breakpointFn === 'up') return up;
  if (breakpointFn === 'down') return down;
  if (breakpointFn === 'between') return between;
  return false;
};

export default useBreakPoint;
