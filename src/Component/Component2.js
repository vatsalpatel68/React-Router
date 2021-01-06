import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
class Component2 extends Component{
    name = 'vatsal';
    age = 21;
    render(){
        return(
            
            <Link to={'/'+this.name +'/'+this.age}><h1>Component 2</h1></Link>
        )
    }
}

export default Component2;