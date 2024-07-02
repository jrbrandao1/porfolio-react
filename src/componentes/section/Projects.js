import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import dnctempo from '../../image/projects/DncWeather.png'
import escoladnc from '../../image/projects/escoladnc.svg'

function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
                img={dnctempo}
                title="DncWeather"
                tech="HTML, CSS e JavaScript"
                description="Tela funcional com consumo de API"
                repo="https://github.com/jrbrandao1/desafio2"
                site="https://desafio2-snowy-nine.vercel.app/" />


            <Card
                img={escoladnc}
                title="Escola DNC"
                tech="HTML,CSS e JavaScript"
                description="Landing page aplicando HTML, CSS e criando funcionalidades com JavaScript."
                repo="https://github.com/jrbrandao1/LandingPageDNC"
                site="https://landing-page-dnc-hazel.vercel.app/" />
            <ButtonB text='Acesse meu repositório' link='https://github.com/jrbrandao1' />
        </div>
    )
}

export default Projects