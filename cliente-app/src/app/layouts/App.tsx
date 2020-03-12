import React from 'react'
import NavBar from '../../features/nav/NabBar';
import {Container} from 'semantic-ui-react';
import Pos from './Pos'
import {Route,Switch} from 'react-router-dom'
import Productos from './Productos'
import Categorias from './Categorias'
import Home from './Home'

class App extends React.Component{

    render(){

        return (
            <React.Fragment>
                <NavBar></NavBar>
                <Container style={{marginTop:'7em'}}>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/pos">
                            <Pos></Pos>
                        </Route>
                        <Route path="/productos">
                            <Productos></Productos>
                        </Route>
                        <Route path="/categorias">
                            <Categorias></Categorias>
                        </Route>

                    </Switch>
                    
                </Container>
            </React.Fragment>
        )
    }
}

export default App