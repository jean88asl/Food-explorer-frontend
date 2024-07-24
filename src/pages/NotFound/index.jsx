import { Container } from "./styles";
import { TbRobotOff } from "react-icons/tb";

export function NotFound() {
    return (
        <Container>
            <section>
                <h1>Página não encontrada. <TbRobotOff/> </h1>
                <p>Desculpe, a página que você está procurando não existe. Clique <a href="/">aqui</a> para voltar home.</p>
            </section>
        </Container>    
    )
}