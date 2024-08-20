import { api } from "../../service/api"
import { SignInContainer, SignInHeader, SignInForm, SignInLink } from './styles'
import Logo from "../../assets/logo.svg"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSignUp()
        }
    };

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Favor preencha dados os campos.")
        }

        if (password.length < 6) {
            return alert("A senha deve conter mais de 5 caracteres")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.")
                return navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar o usuário.")
                }
            })
    }

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
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <Input
                        placeholder='Exemplo:exemplo@email.com.br'
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                    />
                </div>

                <div>
                    <label htmlFor="">Senha</label>
                    <Input
                        type="password"
                        placeholder='No mínimo 6 caracteres'
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button 
                    type="button" 
                    title="Criar conta" 
                    onClick={handleSignUp}
                    onKeyDown={handleKeyDown} 
                />
                <SignInLink href="/">Já tenho uma conta</SignInLink>
            </SignInForm>
        </SignInContainer>
    )
}