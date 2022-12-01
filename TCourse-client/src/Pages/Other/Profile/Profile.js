import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user;
    return (
      <div className="container-all height d-flex justify-content-center align-items-center">
        <div className="form">
          <img src={photoURL} style={{ height:'200px' }} alt="" />
          <div className='mt-4'>
            <p>
              <span className="orange-font">Name :</span> {displayName}
            </p>
            <p>
              <span className="orange-font">Email :</span> {email}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Profile;