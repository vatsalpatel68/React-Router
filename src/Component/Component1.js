import React,{ Component } from 'react';

class Component1 extends Component{
    componentDidMount(){
        console.log(this.props);
        var name = this.props.match.params.name;
        var age = this.props.match.params.age;
        console.log(name);
        console.log(age);
    }
    render(){
        return(
            <div>
                <h1>Component1</h1>
            </div>
        )
    }


}

export default Component1;