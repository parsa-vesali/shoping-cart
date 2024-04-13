import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function Filter() {
    const [brand, setBrand] = React.useState('');

    const handleChange = (event) => {
        setBrand(event.target.value);
    };


    return (
        <div className='Filter'>

            <div className="Filter_result">
                <h4 className='Filter_result-title'>Number of products : 12 </h4>
            </div>

            <div className="sort">
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">order by :</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Latest Products" />
                        <FormControlLabel value="male" control={<Radio />} label="The oldest products" />
                    </RadioGroup>
                </FormControl>
            </div>


            <div className="brand">
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={brand}
                            label="brand"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>


        </div>
    )
}
