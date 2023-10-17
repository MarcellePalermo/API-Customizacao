import Button from "../components/Button"
import "../css/Home.css"
import Logo from "../images/logosobre.svg"

export default function Home(){
    return (
    <>
<div className="img"> 
    <img src={Logo} alt="Sobre Você" title="Sobre Você" />  
</div>
    <section>
    <p>
    Fale um pouco sobre você
    </p>
    </section>

    <Button> Comece Agora </Button>
    </>
);
}