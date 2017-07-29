import React, { Component } from 'react'
import '../styles/App.css';

import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
     constructor(props) {
          super(props);
     }
     render(){
          return (
               <div>
                    <Header />
                    {this.props.children}
                    <Footer />
               </div>
          );
     }
}
