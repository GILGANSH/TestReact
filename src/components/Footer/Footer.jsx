import style from './Footer.module.css'

// Данный элемент является подвалом сайта, и все

const Footer = () => {
    return (
    <>
        <footer>
            <p className={style.footer}> Добро пожаловать в мой подвал! </p>

        </footer>
    </>
    )
};

export default Footer;