import React from 'react'
import {Table, Button} from 'semantic-ui-react';
import ICategoria from '../../../app/modules/ICategoria';

interface IProps{
    categorias: ICategoria[]
}

const CategoriaList:React.FC<IProps> = (props:IProps) => {
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
                                    <Button color='red'>Editar</Button>
                                    <Button color='green'>Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        
    )
}

export default CategoriaList