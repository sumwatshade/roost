import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core';
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
      <TextField
        placeholder="Search businesses..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}/>
      <Table rows={rows}/>
    </>
  );
};

SearchableTable.defaultProps = {
  dataSet: places,
};

export default SearchableTable;
