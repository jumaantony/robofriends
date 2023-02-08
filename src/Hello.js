import React, {Component} from 'react';
import './Hello.css'


class Hello extends Component{
    render(){
        return(
            <div className='f1 tc'>
                <h1> Hellow World</h1>
                <p className='f3 tc'> {this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello;