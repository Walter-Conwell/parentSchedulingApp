import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { useMutation } from "@apollo/client";
import auth from "../utils/auth";
import { DELETE_PROFILE } from "../utils/mutations";
import { Link, useHref } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { LOGIN_PROFILE } from "../utils/mutations";
function Profile(props) {
  const [userData, setUserData] = useState({});
  const [removeProfile, { error: deleteProfileErr, data: deleteProfileData }] =
    useMutation(DELETE_PROFILE);
  const { loading, data, error } = useQuery(QUERY_ME);
  if (error) {
    console.log(JSON.stringify(error));
  }
  if (deleteProfileErr) {
    console.log(JSON.stringify(deleteProfileErr));
  }
  useEffect(() => {
    if (!loading) {
      setUserData(data.me);
      console.log(data);
    }
  }, [loading, data]);
  async function handleDelete(e) {
    try {
      const { data } = await removeProfile({
        variables: {},
      });
      auth.logout();

      console.log(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

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
              <Link
                type="button"
                onClick={handleDelete}
                className="btn btn-danger btn-lg"
                to="/"
              >
                Delete profile
              </Link>
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