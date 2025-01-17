import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f5f5f1",
            dark: "#212121",
        },
        secondary: {
            main: "#e50914",
        },
        text: {
            primary: "#f5f5f1",
        }
    }
});