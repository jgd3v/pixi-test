import { styled } from '@mui/system';
import { isEmpty } from '../../utils/helper';

interface FlexProps {
  justifyContent?: string;
  alignItems?: string;
  padding?: string | number;
  gap?: string | number;
}

const FlexStyled = styled('div')<FlexProps>(({ theme, ...props }) => ({
  display: 'flex',
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  width: '100%',
  padding: !isEmpty(props.padding) ? props.padding : theme.spacing(0.5),
  gap: !isEmpty(props.gap) ? props.gap : '10px',
}));

export default FlexStyled;
