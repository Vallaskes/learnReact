import footerStyle from './css/footer.module.css';

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