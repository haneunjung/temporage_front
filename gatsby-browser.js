import React from "react";

import PageFrame from "./src/components/commons/PageFrame";

import './src/styles/global.css';

export const wrapPageElement = ({ element, props }) => {
  return <PageFrame {...props}>{element}</PageFrame>
}

// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }