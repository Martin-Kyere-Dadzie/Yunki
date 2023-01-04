import React from 'react'
import MainCategory from '../../Partials/MainCategory/MainCategory';
import { categoryList } from '../../Partials/MainCategory/Data/data';

const Filter = ({selectedCategory, selectToggle}) => {
  return (
    <div>
      <div className="category">category</div>
      {/* <MainCategory options={categoryList} value={selectedCategory} selectToggle={selectToggle} /> */}
    </div>
  )
}

export default Filter;