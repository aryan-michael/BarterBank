import { TextField } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';


export interface Props {
    icon: any;
    label: String;
}
function TextInputField(props: Props) {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className='root-container'>
                <TextField
                    id="outlined-basic"
                    label={props.label}
                    variant="outlined"
                    sx={{ m: 1, width: '30ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
                    }}
                />
            </div>
        </Box>
    )
}

export default TextInputField