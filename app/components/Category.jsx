"use client"
import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select,IconButton  } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function Category({ categories }) {
  const [selectedParent, setSelectedParent] = useState('');
  const [subCategories, setSubCategories] = useState([]);

  const handleParentChange = (event) => {
    const parentId = parseInt(event.target.value);
    setSelectedParent(parentId);

    const selectedParentData = categories.find(cat => cat.id === parentId);
    if (selectedParentData && selectedParentData.children) {
      setSubCategories(selectedParentData.children);
    } else {
      setSubCategories([]);
    }
  };
  const handleClear = () => {
    setSelectedParent('');
    setSubCategories([]);
  };
  return (
    <div className="mx-auto p-4 ">
      <FormControl fullWidth className="mb-4">
        <InputLabel>Select Parent Category</InputLabel>
        <Select
          value={selectedParent}
          onChange={handleParentChange}
          className='w-full'
          endAdornment={
            selectedParent && (
              <IconButton onClick={handleClear}>
                <ClearIcon />
              </IconButton>
            )
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map(parentCategory => (
            <MenuItem key={parentCategory.id} value={parentCategory.id}>
              {parentCategory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
     
      <FormControl fullWidth>
        <InputLabel>Select Sub-category</InputLabel>
        <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {subCategories.map(subCategory => (
            <MenuItem key={subCategory.id} value={subCategory.id}>
              {subCategory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Category;
