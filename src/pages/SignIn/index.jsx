import { useState } from 'react'
import { SignInContainer, SignInHeader, SignInForm, SignInLink } from './styles'
import Logo from "../../assets/logo.svg"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from "../../hooks/auth"


export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useAuth()

    function handleSignIn() {
        if (!email || !password) {
            alert("Favor preencha todos os campos")
        }

        signIn({ email, password })
    }

    return (
        <SignInContainer>
            <SignInHeader>
                <img src={Logo} alt="" />
                <h1>food explorer</h1>
            </SignInHeader>

            <SignInForm>
                <h2>Faça Login</h2>
                <div>
                    <label htmlFor="">Email</label>
                    <Input
                        required
                        placeholder='Exemplo:exemplo@email.com.br'
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <Input
                        required
                        type="password"
                        placeholder='No mínimo 6 caracteres'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button title="Entrar" type="button" onClick={handleSignIn} />

                <SignInLink href="#">Criar uma conta</SignInLink>
            </SignInForm>
        </SignInContainer>
    )
}