import Navbar from './Navbar';
import { useMediaQuery, useTheme } from '@material-ui/core';
import '../styles/globals.css'

const Layout = ({ children }) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <>
            <Navbar />
        </>
    );
};

export default Layout;
