import React from 'react'
import {Header,Input, Form} from 'semantic-ui-react';
import CategoriaList from './CategoriaList';
import ICategoria from '../../../app/modules/ICategoria';

interface IProps{
    categorias: ICategoria[]
}

const CategoriaDashboard:React.FC<IProps> = (props:IProps) => {
    return (
        <div>
            <Header size='large'>Categorías de Productos</Header>
            
            {/* <Header size='tiny'>Buscar</Header> */}

            {/* <Input size='large' placeholder='Nombre Categoría' /> */}

            <Form>
                <Form.Field>
                    <label>Buscar</label>
                    <input placeholder='First Name' />
                </Form.Field>
            </Form>

            <CategoriaList
                categorias={props.categorias} >
            </CategoriaList>
         
        </div>
       
    )
}

export default CategoriaDashboard