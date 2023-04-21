import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
export interface Props {
    icon: any;
    label: string;
    type: string;
}

function TextInputField(props: Props) {
    return (
        <div className='textfield'>
            <TextField
                label={props.label}
                variant="outlined"
                size='small'
                sx={{ m: 0.5, width: '35ch' }}
                type={props.type} //condition which checks the value of a checkbox
                InputProps={{
                    endAdornment: <InputAdornment position="end">{props.icon}</InputAdornment>,
                }}
            />
        </div>
    )
}

export default TextInputField