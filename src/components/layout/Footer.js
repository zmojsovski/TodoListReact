import React, {Component} from 'react';


class Footer extends Component {
  render(){
  return (
  <div style={headerStyle}>
        <span>Tasks:</span>{' '}
        <span style={{marginRight: '5px'}}>{this.props.brojac}</span> 
  </div>
  )
}
}



export default Footer;
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'right',
    padding: '2px'
}