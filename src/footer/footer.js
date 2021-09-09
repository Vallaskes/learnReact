import footer from './css/footer.module.css';
//import ;

let thisYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className="wrapper">
                <p>Develop for Vallaskes, {thisYear}</p>
            </div>
        </footer>
    )
};

export default Footer;