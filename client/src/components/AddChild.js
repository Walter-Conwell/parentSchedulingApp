import logoImage from "../assets/kidzdirect-low-resolution-color-logo.png";
import { useMutation } from "@apollo/client";
import { ADD_CHILD } from "../utils/mutations";
import auth from "../utils/auth";
import React, { useState } from "react";

export default function AddChild() {
  const [addChild, { error: addChildErr, data: addChildData }] =
    useMutation(ADD_CHILD);
  if (addChildErr) {
    console.log(JSON.stringify(addChildErr));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("test");
    const { childName, teacherNames, parents, gradeLevel } = e.target.elements;
    let child = {
      childName: childName.value,
      teacherNames: teacherNames.value,
      parents: parents.value,
      gradeLevel: parseInt(gradeLevel.value),
    };
    console.log(addChild);

    try {
      const { data } = await addChild({
        variables: child,
      });

      // auth.login(data.addChild.token);

      console.log(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Add a Child
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="childName"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="name">
                            Child Name:
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="teacherNames"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="email">
                            Teacher Name:
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="parents"
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="password">
                            Parents:
                          </label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="gradeLevel"
                            className="form-control"
                          />
                          <label
                            className="form-label"
                            htmlFor="passwordConfirm"
                          >
                            Grade Level:
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Save:
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={logoImage}
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
