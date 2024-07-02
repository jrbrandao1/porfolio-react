import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/jrbrandao1/'>
                    <FaInstagram size={29} /></a></li>

                <li><a href='https://www.linkedin.com/in/carlos-albertojr/'>
                    <FaLinkedin size={29} /></a></li>

                <li><a href='https://github.com/jrbrandao1'><FaGithub size={29} /></a></li>

            </ul>
            <p>jrbrandao1@live.com</p>
            <p>Carlos Júnior © 2024</p>
        </div>
    )
}

export default Footer