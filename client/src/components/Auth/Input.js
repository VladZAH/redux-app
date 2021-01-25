import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({name, type, autoFocus, label, handleChange, handleShowPassword, half}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name}
                onChange={handleChange}
                required
                variant='outlined'
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={ name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                } : null}
            />
        </Grid>
    );
}

export default Input