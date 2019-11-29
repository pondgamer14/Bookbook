import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import {PostData} from '../../services/PostData';
import UserFeed from "../UserFeed/UserFeed";
import Table from 'react-bootstrap/Table'
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import cart from "./cart.png";
import shopping from "./shopping.png";
import star from "./star.png";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


class Cart extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
name:'',
T:'',
feedp:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.payment = this.payment.bind(this);

this.onChange = this.onChange.bind(this);
this.deleteFeed = this.deleteFeed.bind(this);
this.deleteFeedAction = this.deleteFeedAction.bind(this);
this.logout = this.logout.bind(this);
this.getTotal = this.getTotal.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
this.getTotal();

}

else{
this.setState({redirectToReferrer: true});
}

}
payment(){

confirmAlert({
title: 'Confirm',
message: 'Are you sure to make this payment.',
buttons: [
{
label: 'Yes',
onClick: () => alert('Payment Successfully')
},
{
label: 'No',

}
]
});

}


deleteFeed(e){

confirmAlert({
title: 'Delete Product',
message: 'Are you sure to delete this product from cart.',
buttons: [
{
label: 'Yes',
onClick: () => this.deleteFeedAction(e)
},
{
label: 'No'
}
]
});

}

deleteFeedAction(e){

let updateIndex=e.target.getAttribute('value');

let feed_id=document.getElementById("del").getAttribute("data");

let data = JSON.parse(sessionStorage.getItem("userData"));

let postData = { user_id: data.userData.user_id,feed_id: feed_id };
if (postData) {

PostData('feedDelete', postData).then((result) => {
this.state.data.splice(updateIndex,1);
this.setState({data:this.state.data});

if(result.success){
window.location.href = "/cart";


}
else
;

});
}
}

editFeed(e){

alert("j");
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
getTotal() {

let data = JSON.parse(sessionStorage.getItem("userData"));
this.setState({name:data.userData.name});
let postData = { user_id: data.userData.user_id};

if (data) {
PostData('getTotal', postData).then((result) => {
let responseJson = result;
if(responseJson.Total){
this.setState({T: responseJson.Total});

}
});
}

}


onChange(e){
this.setState({userFeed:e.target.value});
}

logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {

if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (
<div>


<br/>
<hr/><h3> Shopping Cart</h3>
<Button variant="outline-success" style={{marginLeft:"1.8%"}}>Total Price : {this.state.T}</Button>
<hr/>
<br/>







<UserFeed feedData = {this.state.data} deleteFeed = {this.deleteFeed} name={this.state.name}/>
<button className="button success" onClick={this.payment}>Pay</button>

</div>
);

}
}

export default Cart;