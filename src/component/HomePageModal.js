import React from 'react';
import ReactDOM from 'react-dom';



const HomePageModal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss}
         className='ui dimmer modals visible active' >
        <div onClick={(e) => e.stopPropagation()} 
        className='ui standard modal visible active' >
        <div className='header' style={{ backgroundColor: '#28B9B5', color:'white'}}>{props.title}</div>
        <div className='content' style={{ backgroundColor: '#28B9B5', color:'white', fontSize: 'large'}}>
          {props.content}
        </div>
        <div className='actions' style={{ backgroundColor: '#28B9B5',  }}>
        {props.actions}
        </div>
        </div>
        </div>,
        document.querySelector('#modal')

    );
}
export default HomePageModal;