import React, { useContext } from 'react'
import {Table, Button} from 'semantic-ui-react';
import ICategoria from '../../../app/modules/ICategoria';
import categoriaStore from '../../../app/stores/categoriaStore'

interface IProps{
    categorias: ICategoria[]
}

const CategoriaList:React.FC<IProps> = (props:IProps) => {

    const {showEditWindow, deleteCategoria} = useContext(categoriaStore)

    return (
        
            <Table stackable>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Categoria</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Acciones</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        props.categorias.map((categoria:ICategoria) => (
                            <Table.Row>
                                <Table.Cell>{categoria.nombre}</Table.Cell>
                                
                                <Table.Cell textAlign='right'>
                                    <Button onClick = {() => showEditWindow(true, categoria)} color='red'>Editar</Button>
                                    <Button onClick = {() => deleteCategoria(categoria.id)} color='green'>Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        
    )
}

export default CategoriaList