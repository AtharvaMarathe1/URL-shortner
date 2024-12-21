// import {Link} from 'react-router-dom'
import styles from "./homePage.module.css"

const Home = () => {
    return (
        <>
        <div className={styles.text}>
        <h1>Home Page</h1>
        <p className={styles.text1}>About Us:</p>
        <p className={styles.text1}>The Url shortner minimizes the url string and gives an optimized set of string which redirects to the same website, but is easier to remember or type instead of the long one.</p>
        <p className={styles.text1}>NOTE: delete the https:/ before clicking on submit button</p>
        {/* <Link to="/product">Product </Link>
        <Link to="/url-shortner">URL-shortner </Link> */}
        </div>
        </>
    );
}
export default Home