import React, {useState, useEffect} from 'react';
import {TextField, Box} from '@material-ui/core';
import Fuse from 'fuse.js'; ;

import Table from './Table';

import places from '../test-data/places';

const fuseOptions = {
  keys: [{
    name: 'name',
    weight: 0.4,
  }, {
    name: 'tags',
    weight: 0.4,
  }, {
    name: 'website',
    weight: 0.2,
  }],
};


// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: 'white',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: '#4cb5ab',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'white',
//       },
//       '&:hover fieldset': {
//         borderColor: 'white',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#4cb5ab',
//       },
//     },
//   },
// })(TextField);

const SearchableTable = ({dataSet}) => {
  const [fuse, setFuse] = useState(null);
  const [rows, setRows] = useState(dataSet);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const data = dataSet.sort(() => Math.random() - 0.5);
    const f = new Fuse(data, fuseOptions);
    setFuse(f);
  }, [dataSet]);

  useEffect(() => {
    if (search.trim().length === 0) {
      setRows(dataSet);
    } else if (fuse) {
      setRows(fuse.search(search).map((r) => r.item));
    }
  }, [search]);

  return (
    <>
      <Box component='form' mt={3} className="textfield">
        <TextField
          placeholder="Search local places (ex. 'coffee, bar, vegan, ...')"
          style={{
            width: '100%',
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          color="primary"/>
      </Box>
      <Box mt={3}>
        <Table rows={rows} />
      </Box>
    </>
  );
};

SearchableTable.defaultProps = {
  dataSet: places,
};

export default SearchableTable;
