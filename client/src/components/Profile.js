import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link, useHref } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LOGIN_PROFILE } from "../utils/mutations";
function Profile(props) {
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
        <div className="container-fluid justify-content-center align-items-center dkgreen-bkg">
          <h2>{userData.name}</h2>
          <h3>{userData.email}</h3>
          <div className="">
            {/* <h4 type="input"> Add your Child </h4> */}
            <div>
              {/* check authentication */}
              <button className="font-size">
                {/* <h5 type="input">Add a Child</h5> */}
                <a
                  href="/addChild"
                  className="dkgreen-bkg text-white border-color-white"
                >
                  Add Your Child
                </a>
              </button>
            </div>
          </div>
          {userData.kids ? (
            userData.kids.map((item) => <p>{item.name}</p>)
          ) : (
            <h3>No kids yet!</h3>
          )}
          <button className="dkgreen-bkg text-white">
            <a href="/" className="dkgreen-bkg text-white border-color-white">
              Back to main page
            </a>
          </button>
        </div>
      )}
    </>
  );
}
export default Profile;