import { Table, TableCell, TableHead, TableBody, TableContainer, TableRow, Paper} from '@material-ui/core';
import places from '../test-data/places';

const PlaceTable = () => {
    const rows = [... places]
    return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Business Name</TableCell>
            <TableCell align="left">Website</TableCell>
            <TableCell align="left">Venmo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({name, website, venmo}) => (
            <TableRow key={name}>
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="left"><a href={website} target="_blank">{website}</a></TableCell>
              <TableCell align="left">{venmo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default PlaceTable