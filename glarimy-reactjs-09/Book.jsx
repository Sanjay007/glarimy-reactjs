import "./glarimy.css";
import React from "react";
import {removeBookFromServer} from "./rest.js";

class Book extends React.Component{
    constructor(props){
        super(props);
        this.removeBook = this.removeBook.bind(this);
    }

    removeBook(){
        removeBookFromServer(this.props.isbn);
    }

    render(){
        return(
            <tr>
                <td>{ this.props.isbn }</td>
                <td>{ this.props.title }</td>
                <td>{ this.props.author }</td>
                <td><button onClick={this.removeBook}>Delete</button></td>
            </tr>
        );
    }
};

export default Book;