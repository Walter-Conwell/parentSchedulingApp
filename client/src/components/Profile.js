import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

import React, { useEffect, useState } from 'react'

function Profile() {
    const [ userData, setUserData ] = useState({});
    const { loading, data, error } = useQuery(QUERY_ME);
    if ( error ) {
        console.log(JSON.stringify(error));
    }

    useEffect(() => {
        if (!loading) {
            setUserData( data.me );
            console.log( data );
        }
    }, [loading, data]);

  return (
    <>
        {loading ? "loading..." : 
        <div>
            <h2>{userData.name}</h2>
            <h3>{userData.email}</h3>
            {/* {userData.children.map((item) => 

            )} */}
        </div>
        }
    </>
  )
}

export default Profile