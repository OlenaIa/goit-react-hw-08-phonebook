import { Box, Typography } from '@mui/material';
import { boxStyle } from './StyleEmptyContactsList';

export const EmptyContactsList = () => {
    return (
        <Box sx={boxStyle}>
            <Typography component="h1" variant="h5">
                You don't have any contacts yet
            </Typography>
        </Box >
    )
};