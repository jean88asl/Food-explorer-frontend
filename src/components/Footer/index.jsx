import { ContainerFooter, FooterContent } from './styles'
import logoGray from '../../assets/logo_gray.svg'

export function Footer() {
    return (
        <ContainerFooter>
            <FooterContent>
                <div>
                    <img src={logoGray} alt="" />
                    <h2>food explorer</h2>
                </div>

                <p>© 2024 - Todos os direitos reservados.</p>
            </FooterContent>
        </ContainerFooter>
    )
}