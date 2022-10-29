import React, { useState } from 'react'
import Select from 'react-select';
import {RiFilterFill} from 'react-icons/ri'
import PropTypes from 'prop-types';

// const data = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla',icon:<RiFilterFill/> }
// ]

// type Prop = {
//   data:{value:string,label:string}[]
// }

const SelectBar = ({data,runAfterChange}) =>{
  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = e => {
    console.log({'result':e})
    setSelectedOption(e);
    if(runAfterChange){
      runAfterChange(e)
    }
  }
  
  
  return (
 
    <Select
      placeholder="Category"
      value={selectedOption}
      options={data}
      onChange={handleChange}
      getOptionLabel={e => (
        <div className='select-option' style={{ display: 'flex', alignItems: 'center'}}>
          {e.icon}
          <span style={{ marginLeft: 5 }}>{e.label}</span>
        </div>
      )}
    />
  )}

SelectBar.propTypes={
  children: PropTypes,
  data:PropTypes.arrayOf(PropTypes.shape({
    value:PropTypes.any.isRequired,
    label:PropTypes.string.isRequired,
    icon:PropTypes.any.isRequired,
  })),
  runAfterChange:PropTypes.func
 
}
export default SelectBar