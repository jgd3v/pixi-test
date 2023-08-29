import { useTheme, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { useGame } from '../../hooks/game';
const TableComponent = () => {
  const game = useGame();
  const theme = useTheme();
  const columns = ['User', 'Bet', 'PayOut', 'Profit'];
  return (
    <TableContainer component={Paper} elevation={4} sx={{ marginY: theme.spacing(3) }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" sx={{ textTransform: 'uppercase' }}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {game.historical.length ? (
            game.historical.map(({ userName, amount, payout, win }, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">{userName}</TableCell>
                <TableCell align="center">€ {amount && Number(amount).toFixed(2)}</TableCell>
                <TableCell align="center">{payout && payout.toFixed(2)}</TableCell>
                <TableCell align="center" sx={{ color: win ? theme.palette.success.main : '#FFFFFF' }}>
                  € {(amount && payout ? Number(amount) * payout : 0).toFixed(2)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell align="center" component="th" scope="row" colSpan={4} sx={{ textTransform: 'uppercase' }}>
                no bets available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
