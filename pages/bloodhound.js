import React from "react";
import Submit from "../components/bloodhound/Submit";
import Head from "../components/global/Head"

import { black } from "../components/utilities/Colors";
import Footer from "../components/global/Footer";

export default class BloodHound extends React.Component {
  render() {
    return (
      <>
        <Head title='Bloodhound' />
        <Submit />
        <Footer background={black} />
      </>
    );
  }
}
