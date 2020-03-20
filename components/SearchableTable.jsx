import React, {useState, useEffect} from 'react';
import {TextField, withStyles} from '@material-ui/core';
import Fuse from 'fuse.js'; ;

import Table from './Table';

import places from '../test-data/places';

const fuseOptions = {
  keys: [{
    name: 'name',
    weight: 0.7,
  }, {
    name: 'website',
    weight: 0.3,
  }],
};


const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#4cb5ab',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#4cb5ab',
      },
    },
  },
})(TextField);

const SearchableTable = ({dataSet}) => {
  const [fuse, setFuse] = useState(null);
  const [rows, setRows] = useState(dataSet);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const f = new Fuse(dataSet, fuseOptions);
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
      <form className="textfield">
        <CssTextField
          placeholder="Search businesses..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}/>
      </form>
      <div className="search-table">
        <Table rows={rows}/>
      </div>

      <style jsx>{`
        .search-table {
          margin: 10px 0;
          width: 90vw;
        }

        .textfield {
          margin: 10px 0;
          width: 90vw;
        }
      `}</style>
    </>
  );
};

SearchableTable.defaultProps = {
  dataSet: places,
};

export default SearchableTable;
