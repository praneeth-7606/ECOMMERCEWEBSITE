import React from "react";
// import AdminMenu from "../../components/Layout/AdminMenu";
import Adminmenu from "../layout/adminmenu";
// import Layout from "./../../components/Layout/Layout";
import Layout from "../layout/layout";

const Users = () => {
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
