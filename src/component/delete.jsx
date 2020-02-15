import React from 'react'
import Modal from './modal'
import history from './history';
import { fetchOneCollection } from '../redux/collection/collection.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBudget } from '../redux/collection/collection.action';

 class Delete extends React.Component{

     componentDidMount(){
        this.props.fetchOneCollection(this.props.match.params.id)
     }
     renderActions(){
         const {id} = this.props.match.params;
         return (
        <React.Fragment>
        <Link to='/' onClick={() => this.props.deleteBudget(id)} className='ui button negative'>Delete</Link>
        <Link to='/' className='ui button' > Cancle</Link>
        </React.Fragment>
        )
    }
    renderContent(){
        if(!this.props.collections){
            return 'Are you sure you want to delete this collections'
        }
        return `Are you sure you want to delete this collection with title ${this.props.collections.discriptions}`
    }
        render(){
    return (
       <Modal 
            title= 'Delete Budget'
            content={this.renderContent()}
            actions = {this.renderActions()}
            onDismiss={() => history.push('/')}
            /> 
    )
}
}

const mapStateToProps = (state, ownProps) => {
    return {collections: state.collection[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchOneCollection, deleteBudget})(Delete);