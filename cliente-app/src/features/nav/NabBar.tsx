import React from 'react';
import {Menu, Button, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'


const NabBar:React.FC = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>                

                <Menu.Item as={Link} to='/' header>
                    <img src="/logo192.png" alt="logo" style={{marginRight: '10px'}}></img>               
                    Point of Sale
                </Menu.Item>                    

                {/* El to='' indica que vaya al path definido en el tag Route del archivo App.tsx */}
                <Menu.Item as={Link} to='/pos' name='POS' />

                <Menu.Item as={Link} to='/productos' name='productos' />

                <Menu.Item as={Link} to='/categorias' name='categorias'>
                    
                </Menu.Item>

            </Container>
        </Menu>
    )
}

export default NabBar;