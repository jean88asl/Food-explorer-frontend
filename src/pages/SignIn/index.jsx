import { SignInContainer, SignInHeader, SignInForm, SignInLink } from './styles'
import Logo from "../../assets/logo.svg"

export function SignIn() {
    return (
        <SignInContainer>
            <SignInHeader>
                <img src={Logo} alt="" />
                <h1>food explorer</h1>
            </SignInHeader>

            <SignInForm>
                <div>
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        placeholder='Exemplo:exemplo@email.com.br'
                    />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <input
                        type="password"
                        placeholder='No mínimo 6 caracteres' 
                    />
                </div>

                <button>
                    Entrar
                </button>
            </SignInForm>

            <SignInLink href="#">Criar uma conta</SignInLink>
        </SignInContainer>
    )
}