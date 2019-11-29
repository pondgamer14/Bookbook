import React, {Component} from 'react';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class Signup extends Component {
constructor(props){
super(props);
this.state = {
username: '',
password: '',
email: '',
name: '',
redirectToReferrer: false
};
this.signup = this.signup.bind(this);
this.onChange = this.onChange.bind(this);
}

signup() {
if(this.state.username && this.state.password && this.state.email && this.state.name){
PostData('signup',this.state).then((result) => {
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
if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
return (<Redirect to={'/home'}/>)
}
return (
<div className="content2">
<div className="row " id="sBody">
<div className="medium-5 columns center" style={{backgroundColor: "rgba(190, 190, 190, 0.6) ",marginTop: "120px"}}>
<h4>Signup</h4>
<input type="text" name="email" placeholder="Email" onChange={this.onChange}/>
<input type="text" name="name" placeholder="Name" onChange={this.onChange}/>
<input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
<input type="password" name="password" placeholder="Password" onChange={this.onChange}/>
<input type="submit" style={{backgroundColor: "#D2B48C"}} className="button" value="Sign Up" onClick={this.signup}/>
<a href="/login" style={{color: "#444444"}}>Login</a>
</div>
</div>
</div>
);
}
}
export default Signup;