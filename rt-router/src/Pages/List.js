import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h2>list.com{this.state.cid}</h2>
         );
    }
    componentDidMount(){
        console.log(this.props.match)   
        let tempId = this.props.match.params.cid
        this.setState({
            cid:tempId
        })
    }
}
 
export default List;