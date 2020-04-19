import React, { useContext } from 'react'
import {Header,Button, Form} from 'semantic-ui-react';
import CategoriaList from './CategoriaList';
import ICategoria from '../../../app/modules/ICategoria';
import categoriaStore from '../../../app/stores/categoriaStore';

interface IProps{
    categorias: ICategoria[]
}

const CategoriaDashboard:React.FC<IProps> = (props:IProps) => {

    const {showNewWindow} = useContext(categoriaStore);

    return (
        <div>
            <Header size='large'>Categorías de Productos</Header>

            <Form>
                <Form.Field>
                    <label>Buscar</label>
                    <input placeholder='First Name' />
                </Form.Field>

                <Form.Field>
                    <Button primary floated="right" onClick = {() => showNewWindow(true)}>Nueva Categoría</Button>
                </Form.Field>
            </Form>

            

            <CategoriaList
                categorias={props.categorias} >
            </CategoriaList>
         
        </div>
       
    )
}

export default CategoriaDashboard