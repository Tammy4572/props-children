import React, { Component } from 'react';

export default class ChildComponent extends Component {
     constructor(props) {
          super(props)
     }
     render() {
          return (
               <div>
                    <div>
                         <input className="btn" type="submit" onClick={this.props.onClick} />
                    </div>
               </div>
          );
     }
}
