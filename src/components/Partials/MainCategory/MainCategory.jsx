import { ToggleButton, ToggleButtonGroup } from '@mui/material'
// import { makeStyles } from '@material-ui/styles';
import React from 'react'
import './MainCategory.css'

// const useStyles = makeStyles({
//     width: '100%',
//     justifyContent: 'space-between'
// });

const MainCategory = (options, value, selectToggle) => {

    // const classes = useStyles();

  return (
    <ToggleButtonGroup value={value} onChange={selectToggle}>
        {options.map(({label, id, value}) => <ToggleButton value={value} key={id}>{label}</ToggleButton>)}
    </ToggleButtonGroup>
  )
}

export default MainCategory