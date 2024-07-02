import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation'>
            <h4>Bem-vindo ao meu Portfólio</h4>
            <h1>Olá, eu sou Carlos Júnior!</h1>
            <p>
                Olá, meu nome é Carlos Júnior e tenho 29 anos, minha jornada me levou a explorar <br />
                diferentes áreas, mas foi na programação que encontrei meu propósito. Sou um <br />
                desenvolvedor Full-stack apaixonado por desafios e em busca de oportunidades em <br />
                empresas inovadoras e com identidade própria. Meu objetivo é fazer parte de uma <br />
                equipe que valorize o aprendizado contínuo e proporcione um ambiente estimulante <br />
                para o desenvolvimento de habilidades.</p>
            <ButtonA link='https://github.com/jrbrandao1' text='Conecte-se comigo! ' />

        </div>
    )
}

export default Presentation