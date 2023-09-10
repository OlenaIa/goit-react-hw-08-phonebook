import { useSelector } from "react-redux";
import { selectError } from "redux/phoneBook/phoneSelector";
import { Box, Typography } from "@mui/material";
import { boxErrorStyle } from "./StyleError";

export const Error = () => {
    const error = useSelector(selectError);

    return (
        <Box sx={boxErrorStyle}>
            <Typography color='white' component="h2" variant="h5">
                We're sorry, {error}
            </Typography>
        </Box>
)};