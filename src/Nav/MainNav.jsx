import {Link} from 'react-router-dom'
import styles from "../App.module.css"

const MainNav = () => {
    return(
        <div className={styles.container}>
            <div className={styles.l1}>
            <Link to="./home">Home</Link>
            </div>
            {/* <div className={styles.l1}>
            <Link to="./product">Products</Link>
            </div> */}
            <div className={styles.l1}>
            <Link to="./url-shortner">URL Shorten</Link>
            </div>
        </div>
    );
}

export default MainNav