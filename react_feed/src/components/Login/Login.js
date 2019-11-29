import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
class Login extends Component {
constructor(){
super();
this.state = {
username: '',
password: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.username && this.state.password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/home'}/>)
}
if(sessionStorage.getItem('userData')){
return (<Redirect to={'/home'}/>)
}
return (
<div  className="content">
<div className="row" id="Body" >
<div style={{marginRight: "10%",marginLeft: "10%",width:"100%",marginBottom:"20%"}}>
<div className="medium-5 columns right" style={{backgroundColor: "rgba(190, 190, 190, 0.9) ",marginTop: "40px"}}>

<h4>Login</h4>
<input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
<input type="password" name="password" placeholder="Password" onChange={this.onChange}/>

<Button  input type="submit"  className="button" value="Login" onClick={this.login}  variant="warning">Login</Button>
<Button  href="/signup" variant="danger">Registration</Button>
</div>
</div>
</div>
</div>
);
}
}
export default Login;