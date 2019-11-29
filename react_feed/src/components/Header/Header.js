import React, { Component } from 'react';
import './Header.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {PostData} from '../../services/PostData';
class Header extends Component {
	constructor(props) {
super(props);

this.state = {
name:'',
};
this.getUserFeed = this.getUserFeed.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
}

else{
this.setState({redirectToReferrer: true});
}

}
getUserFeed() {

    let data = JSON.parse(sessionStorage.getItem("userData"));
    this.setState({name:data.userData.name});
    let postData = { user_id: data.userData.user_id};

    if (data) {
    PostData('feed', postData).then((result) => {
    let responseJson = result;
    if(responseJson.feedData){
    this.setState({data: responseJson.feedData});
    
    }
    });
    }
}
logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
	window.location.href = "/";
}
render() {
return (
<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="/home">BookBook</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Shop</Nav.Link>
	  <Nav.Link href="/cart">Cart</Nav.Link>
      
      
    </Nav>
    <Nav>
      <Nav.Link href="/wish">Wish to Read</Nav.Link>
	  <NavDropdown title={this.state.name} id="collasible-nav-dropdown">
        <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
       
      </NavDropdown>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
);
}
}

export default Header;