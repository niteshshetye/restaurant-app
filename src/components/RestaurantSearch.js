import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Table} from 'react-bootstrap'
import { 
    Link
} from "react-router-dom";
import NavbarMenu from './NavbarMenu'

export default class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state = {
            searchData: null,
            noData: true
        }
    }

    updateDom(){
        fetch("http://localhost:3000/restaurant").then((responce)=>{
            responce.json().then((result)=>{
                this.setState({list: result})
            })
        })
    }
    search(searchText){
        fetch('http://localhost:3000/restaurant?q=' + searchText).then((responce)=>{
            responce.json().then((result)=>{
                if(result.length > 0){
                    this.setState({noData: false, searchData: result})
                    this.updateDom()
                    console.warn(result)
                }else{
                    this.setState({noData: true, searchData: null})
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>RestaurantSearch</h1>
                <input type="text" onChange = {(e)=>{this.search(e.target.value)}}/>
                <div>
                    {
                        /* checking the list is null or not */
                        this.state.searchData? 
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
                                        this.state.searchData.map((item, i)=>
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
                        : "" 
                    }
                    {
                        this.state.noData? <h3>No Data</h3>: null
                    }
                </div>
            </div>
        )
    }
}
