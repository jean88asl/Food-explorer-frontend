import { SignInContainer, SignInHeader, SignInForm, SignInLink } from './styles'
import Logo from "../../assets/logo.svg"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return (
        <SignInContainer>
            <SignInHeader>
                <img src={Logo} alt="" />
                <h1>food explorer</h1>
            </SignInHeader>

            <SignInForm>
                <h2>Crie sua conta</h2>
                <div>
                    <label htmlFor="">Seu Nome</label>
                    <Input
                        placeholder='Exemplo:Maria da Silva'
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <Input
                        placeholder='Exemplo:exemplo@email.com.br'
                    />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <Input
                        type="password"
                        placeholder='No mínimo 6 caracteres'
                    />
                </div>

                <Button title="Criar conta" />
                <SignInLink href="#">Já tenho uma conta</SignInLink>
            </SignInForm>
        </SignInContainer>
    )
}