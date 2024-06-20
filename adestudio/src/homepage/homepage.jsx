import React, { Component } from "react";
import "../index.css";
import Landingpage from "./landingpage";
import Paket from "./paket";
import Footers from "./footers";
//import Carousel from "./carousel";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div>

        </div>
        <div>
            <section>
                <Landingpage />
            </section>
        </div>

        <div>
            <Paket/>
        </div>
        <Footers/>
      </div>
    );
  }
}
