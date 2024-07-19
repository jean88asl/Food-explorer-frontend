import { Outlet } from 'react-router-dom'
import {Header} from '../../components/Header'

import {Container} from './styles'

export function DefaultContainer() {
    return (
        <Container>
            <Header />
            <Outlet />
            
        </Container>
    )
}