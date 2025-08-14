import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Map from "../components/Map/Map";
import styles from "./AppLayout.module.css";
import User from "../components/User/User";

// ENTIRE APPLICATION IS RENDERED HERE!!

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
