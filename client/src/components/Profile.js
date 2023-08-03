import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link, useHref } from "react-router-dom";

import React, { useEffect, useState } from "react";
import { LOGIN_PROFILE } from "../utils/mutations";

function Profile() {
  const [userData, setUserData] = useState({});
  const { loading, data, error } = useQuery(QUERY_ME);
  if (error) {
    console.log(JSON.stringify(error));
  }

  useEffect(() => {
    if (!loading) {
      setUserData(data.me);
      console.log(data);
    }
  }, [loading, data]);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div className="container d-flex justify-content-between align-items-center dkgreen-bkg text-white h-50">
          <h2>{userData.name}</h2>
          <h3>{userData.email}</h3>
          <div className="">
            <h4 type="input"> Add your Child </h4>
            <div>
              {/* check authentication */}
              Edit info here -
              <button className="font-size">
                <h5 type="input">Child's name</h5>
              </button>
            </div>
          </div>
          <button className="dkgreen-bkg text-white">
            <a href="/" className="dkgreen-bkg text-white border-color-white">
              Back to main page
            </a>
          </button>
          {/* {userData.children.map((item) => 

            )} */}
        </div>
      )}
    </>
  );
}

export default Profile;
