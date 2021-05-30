import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
// icon library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { 
    Link
} from "react-router-dom";
import NavbarMenu from './NavbarMenu'


class RestaurantList extends Component {
    constructor()
    {
        super();
        this.state = {
            list: null
        }
    }
    componentDidMount()
    {
        this.updateDom()
    }

    updateDom(){
        fetch("http://localhost:3000/restaurant").then((responce)=>{
            responce.json().then((result)=>{
                this.setState({list: result})
            })
        })
    }

    deleteItem(id){
        fetch('http://localhost:3000/restaurant/' + id, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        }).then((responce)=>{
            responce.json().then((result)=>{
                alert('Click "OK" to Delete The Restuarant')
                this.updateDom()
            })
        })
    }

    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>RestaurantList</h1>
                {

                    /* checking the list is null or not */
                    this.state.list? 
                    /* If list is not null Than do this */
                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Rating</th>
                                    <th>Opration</th>
                                </tr>
                            </thead>  
                            <tbody>
                                {
                            
                                    /* Because the list is an array we use array properties here */
                                    this.state.list.map((item, i)=>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.rating}</td>
                                        <td>{<Link to={"/update/" + item.id}><FontAwesomeIcon icon = {faEdit} color = 'orange'/></Link>} {<span onClick = {()=>{this.deleteItem(item.id)}}><FontAwesomeIcon icon = {faTrash} color = 'red'/></span>}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </Table>  
                    </div>
                    /* If list is null do this */   
                    : <p>Please Wait.....</p> 
                }
            </div>
        )
    }
}

export default RestaurantList