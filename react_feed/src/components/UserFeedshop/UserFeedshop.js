import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './UserFeedshop.css';
//import TimeAgo from 'react-timeago';
class UserFeedshop extends Component {

constructor(props){
super(props);
}

render() {

let userFeedshop = this.props.feedDatashop
.map(function (feedDatashop, index) {
return (
<div className="medium-12 columns" key={index}>

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">

<div className="about-people-author">
<p className="author-name">

<Linkify>{feedDatashop.p_name}</Linkify>


<br/>
<Linkify>{feedDatashop.p_price}</Linkify>

</p>

</div>
</div>
<div className="small-12 medium-2 columns add-friend">

<div className="add-friend-action">
<button id="del" className="button small btn-color" onClick={this.props.addCart} data={feedDatashop.p_name} value={this.props.index} >
<i className="fa fa-user-times" aria-hidden="true"></i> Add to Cart
</button>
</div>
</div>
</div>
</div>
</div>
)
}, this);

return (
<div>
{userFeedshop}

</div>
);
}

}

export default UserFeedshop;