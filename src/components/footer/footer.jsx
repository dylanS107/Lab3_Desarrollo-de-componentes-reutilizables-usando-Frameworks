import styles from './footer.module.css';

export const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Todos los derechos reservados - ESPE IT{anioActual}.</p>
            <p className={styles.text}>Dirección: Av. del Ejército 18-01 y Av. 12 de Abril, Quito, Ecuador</p>
        </footer>
    );
};
