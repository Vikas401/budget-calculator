import React from 'react';
import InputForm from '../../component/input-form/input-form.component';

const UserPage = ({currentUser}) => {
    
    return(
        <div>
        <InputForm currentUser={currentUser}/>
        </div>
    );
};

export default UserPage;