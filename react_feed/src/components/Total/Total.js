import React, {Component} from 'react';
import Linkify from 'react-linkify';
import './Total.css';
//import TimeAgo from 'react-timeago';
class Total extends Component {

constructor(props){
super(props);
}

render() {

let userp = this.props.feedp


return (
<div>
{userp}

</div>
);
}

}

export default Total;