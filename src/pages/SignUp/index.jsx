import { SignInContainer, SignInHeader, SignInForm, SignInLink } from './styles'
import Logo from "../../assets/logo.svg"

export function SignUp() {
    return (
        <SignInContainer>

            <SignInHeader>
                <img src={Logo} alt="" />
                <h1>food explorer</h1>
            </SignInHeader>

            <SignInForm>
                <div>
                    <label htmlFor="">Seu nome</label>
                    <input
                        type="text"
                        placeholder='Exemplo: Maria da Silva'
                    />
                </div>

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
                    Criar conta
                </button>
                <SignInLink href="#">Já tenho uma conta</SignInLink>
            </SignInForm>
        </SignInContainer>
    )
}