import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';
import hobbit from "./hobbit.jpg";
import b2 from "./2.jpg";
import b3 from "./3.jpg";
import b4 from "./4.jpg";
import b5 from "./5.jpg";
import b6 from "./6.jpg";
import b7 from "./7.jpg";
import b8 from "./8.jpg";
import b9 from "./9.jpg";
import b10 from "./10.jpg";
import cart from "./cart.png";
import shopping from "./shopping.png";
import star from "./star.png";

import watch from "./watch.png";
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

class Home extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false,
userFeed1:'The Hobbit',
userFeed2:'Guy Kawasaki',
userFeed3:'The crow girl',
userFeed4:'The bear and the Nightingale',
userFeed5:'Brave',
userFeed6:'A boy winter',
userFeed7:'Iron man',
userFeed8:'Tale to marvel',
userFeed9:'X-Men',
price1:1200,
price2:550,
price3:690,
price4:799,
price5:850,
price6:499,
price7:85,
price8:75,
price9:85,
name:'',
};

this.getUserFeed = this.getUserFeed.bind(this);
this.addcart = this.addcart.bind(this);
this.wishtoread = this.wishtoread.bind(this);
this.feedUpdate1 = this.feedUpdate1.bind(this);
this.feedUpdate2 = this.feedUpdate2.bind(this);
this.feedUpdate3 = this.feedUpdate3.bind(this);
this.feedUpdate4 = this.feedUpdate4.bind(this);
this.feedUpdate5 = this.feedUpdate5.bind(this);
this.feedUpdate6 = this.feedUpdate6.bind(this);
this.feedUpdate7 = this.feedUpdate7.bind(this);
this.feedUpdate8 = this.feedUpdate8.bind(this);
this.feedUpdate9 = this.feedUpdate9.bind(this);
this.feedUpdate11 = this.feedUpdate11.bind(this);
this.feedUpdate21= this.feedUpdate21.bind(this);
this.feedUpdate31 = this.feedUpdate31.bind(this);
this.feedUpdate41 = this.feedUpdate41.bind(this);
this.feedUpdate51 = this.feedUpdate51.bind(this);
this.feedUpdate61 = this.feedUpdate61.bind(this);
this.feedUpdate71 = this.feedUpdate71.bind(this);
this.feedUpdate81 = this.feedUpdate81.bind(this);
this.feedUpdate91 = this.feedUpdate91.bind(this);
this.onChange = this.onChange.bind(this);
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
//---------------------------Add Product----------------------------
addcart(e){
    confirmAlert({
    title: 'Add to Cart',
    message: 'Product have been added to your cart.',
    buttons: [{ label: 'OK'}]});
}
wishtoread(e){
    confirmAlert({
    title: 'Wish to read',
    message: 'Product have been added to your wish list.',
    buttons: [{ label: 'OK'}]});
}
feedUpdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}

feedUpdate2(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed2,price: this.state.price2 };
    if (this.state.userFeed2) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    });
    }
}
feedUpdate3(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed3,price: this.state.price3};
    if (this.state.userFeed3) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate4(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed4,price: this.state.price4};
    if (this.state.userFeed4) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate5(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed5,price: this.state.price5};
    if (this.state.userFeed5) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate6(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed6,price: this.state.price6};
    if (this.state.userFeed6) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate7(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed7,price: this.state.price7};
    if (this.state.userFeed7) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate8(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed8,price: this.state.price8};
    if (this.state.userFeed8) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate9(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed9,price: this.state.price9};
    if (this.state.userFeed9) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
wishupdate1(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.wishupdate1b,price: this.state.price1};
    if (this.state.wishupdate1) {
    PostData('feedUpdate', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
//---------------------------------------------------------
feedUpdate11(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed1,price: this.state.price1};
    if (this.state.userFeed1) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}

feedUpdate21(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed2,price: this.state.price2 };
    if (this.state.userFeed2) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    });
    }
}
feedUpdate31(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed3,price: this.state.price3};
    if (this.state.userFeed3) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate41(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed4,price: this.state.price4};
    if (this.state.userFeed4) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate51(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed5,price: this.state.price5};
    if (this.state.userFeed5) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate61(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed6,price: this.state.price6};
    if (this.state.userFeed6) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate71(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed7,price: this.state.price7};
    if (this.state.userFeed7) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate81(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed8,price: this.state.price8};
    if (this.state.userFeed8) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
feedUpdate91(e) {
    e.preventDefault();
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { user_id: data.userData.user_id, feed: this.state.userFeed9,price: this.state.price9};
    if (this.state.userFeed9) {
    PostData('feedUpdate1', postData).then((result) => {
    let responseJson = result;
    this.setState({data: responseJson.feedData});
    
    });
    }
}
//---------------------------------------------------------
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
<div className="row" id="Body" >
<div className="medium-12 columns ">
<br/>
<br/><br/>

<center>
<Button variant="outline-danger">Best selling book</Button>
<hr/>
<br/>

<table>
<tr>
<td>
<h4>The Hobbit</h4>
<form onSubmit={this.feedUpdate1} method="post">
<input onChange={this.onChange} value={this.state.userFeed1} type="hidden"/>
<img src={hobbit} width="300px" height="150px" />
<br/>1200฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>

</form>
<form onSubmit={this.feedUpdate11} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>

</td>
<td>
<h4>Guy kawasaki</h4>
<form onSubmit={this.feedUpdate2} method="post">
<input onChange={this.onChange} value={this.state.userFeed2} type="hidden" />
<img src={b2}  width="300px" height="150px"/>
<br/>550฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate21} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>

<td>
<h4>The crow girl</h4>
<form onSubmit={this.feedUpdate3} method="post">
<input onChange={this.onChange} value={this.state.userFeed3} type="hidden" />
<img src={b3}  width="300px" height="150px"/>
<br/>690฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate31} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>
</tr>
</table>


<Button variant="outline-danger">Novel book</Button>
<hr/>
<br/>
<table>
<tr>
<td>
<h4>The bear and the Nightingale</h4>
<form onSubmit={this.feedUpdate4} method="post">
<input onChange={this.onChange} value={this.state.userFeed4} type="hidden"/>
<img src={b6} width="300px" height="150px" />
<br/>799฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate41} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>

</td>
<td>
<h4>Brave</h4>
<form onSubmit={this.feedUpdate5} method="post">
<input onChange={this.onChange} value={this.state.userFeed5} type="hidden" />
<img src={b5}  width="300px" height="150px"/>
<br/>850฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate51} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>

<td>
<h4>A boy in winter</h4>
<form onSubmit={this.feedUpdate6} method="post">
<input onChange={this.onChange} value={this.state.userFeed6} type="hidden" />
<img src={b4}  width="300px" height="150px"/>
<br/>499฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate61} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>
</tr>
</table>


<Button variant="outline-danger">Comics book</Button>
<hr/>
<br/>
<table>
<tr>
<td>
<h4>Iron man</h4>
<form onSubmit={this.feedUpdate7} method="post">
<input onChange={this.onChange} value={this.state.userFeed7} type="hidden"/>
<img src={b8} width="300px" height="150px" />
<br/>85฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate71} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>

</td>
<td>
<h4>Tale to marvel</h4>
<form onSubmit={this.feedUpdate8} method="post">
<input onChange={this.onChange} value={this.state.userFeed8} type="hidden" />
<img src={b9}  width="300px" height="150px"/>
<br/>75฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate81} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>

<td>
<h4>X-Men</h4>
<form onSubmit={this.feedUpdate9} method="post">
<input onChange={this.onChange} value={this.state.userFeed9} type="hidden" />
<img src={b10}  width="300px" height="150px"/>
<br/>85฿<br/>
<input style={{width:"300px"}} name="userFeed1" type="submit" value="Add to Cart" className="button" onClick={this.addcart}/>
</form>
<form onSubmit={this.feedUpdate91} method="post">
<input style={{width:"300px"}} name="wishupdate1" type="submit" value="wishtoread" className="button" onClick={this.wishtoread}/>
</form>
</td>
</tr>
</table>
</center>
	@ Coppyright 2029 -- We love ITS344
</div>

</div>
);
}
}

export default Home;