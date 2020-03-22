import React from 'react';
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  Paper,
  TablePagination,
  makeStyles,
  Typography,
} from '@material-ui/core';

import WebsiteLink from './WebsiteLink';

const useStyles = makeStyles({
  container: {
    maxHeight: 500,
    minHeight: 250,
  },
});

const PlaceTable = ({rows}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles();
  return (
    <Paper>
      <TableContainer className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography style={{fontWeight: 'inherit'}}>
                  Business Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography style={{fontWeight: 'inherit'}}>Tags</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(({name, website, tags}) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row">
                      <Typography color="secondary">
                        { website ? (<WebsiteLink
                          href={website}
                          color="secondary"
                          label={name} />) : name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography>
                        {tags && tags.length ? tags.join(', ') : ''}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

PlaceTable.defaultProps = {
  rows: [],
};

export default PlaceTable;
