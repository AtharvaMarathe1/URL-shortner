import { Outlet} from 'react-router-dom';
import MainNav from '../Nav/MainNav'

const RootLayout = () => {
    return(
    <>
        <MainNav />
        <Outlet />
    </>
    );
}

export default RootLayout