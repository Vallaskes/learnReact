import footerStyle from './css/Footer.module.scss';

let thisYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={footerStyle.footer}>
            <div>
                <p>Develop for Vallaskes, {thisYear}</p>
            </div>
        </footer>
    )
};

export default Footer;