import React from "react";
import Bike from "../../images/bike/bike.png";
import BikeOne from "../../images/bike/bike1.png";
import BikeTwo from "../../images/bike/bike2.png";
import BikeThree from "../../images/bike/bike3.png";
import BikeFour from "../../images/bike/bike4.png";
import BikeFive from "../../images/bike/bike5.png";
import BikeSix from "../../images/bike/bike6.png";
import BikeSeven from "../../images/bike/bike7.png";
import BikeEight from "../../images/bike/bike8.png";
import BikeNine from "../../images/bike/bike9.png";
import BikeTen from "../../images/bike/bike10.png";
import BikeEleven from "../../images/bike/bike11.png";
import BikeTwelve from "../../images/bike/bike12.png";
import BikeThirteen from "../../images/bike/bike13.png";
import BikeFourteen from "../../images/bike/bike14.png";
import BikeFifteen from "../../images/bike/bike15.png";
import BikeSixteen from "../../images/bike/bike16.png";
import BikeSeventeen from "../../images/bike/bike17.png";
import BikeEighteen from "../../images/bike/bike18.png";
import BikeNineteen from "../../images/bike/bike19.png";
import BikeTwenty from "../../images/bike/bike20.png";
import BikeTwentyOne from "../../images/bike/bike21.png";
import BikeTwentyTwo from "../../images/bike/bike22.png";
import BikeTwentyThree from "../../images/bike/bike23.png";

function Customization({ cart }) {
  const image = () => {
    let parts = cart.map((a) => a.parts);
    parts = removeItemAll(parts, "other");
    parts = [...new Set(parts)];
    console.log(parts);
    if (parts.includes("bike")) {
      return Bike;
    } else if (parts.length == 1) {
      if (parts.includes("handlebar")) {
        return BikeTen;
      } else if (parts.includes("crank")) {
        return BikeNine;
      } else if (parts.includes("frame")) {
        return BikeEleven;
      } else if (parts.includes("saddle")) {
        return BikeTwelve;
      } else {
      }
    } else if (parts.length == 2) {
      if (checkIncluded(parts, ["handlebar", "frame"])) {
        return BikeFifteen;
      } else if (checkIncluded(parts, ["handlebar", "saddle"])) {
        return BikeThirteen;
      } else if (checkIncluded(parts, ["crank", "frame"])) {
        return BikeFour;
      } else if (checkIncluded(parts, ["crank", "handlebar"])) {
        return BikeSixteen;
      } else if (checkIncluded(parts, ["frame", "handlebar"])) {
        return BikeFifteen;
      } else if (checkIncluded(parts, ["frame", "front-tire"])) {
        return BikeEighteen;
      }
    } else if (parts.length == 3) {
      if (checkIncluded(parts, ["handlebar", "frame", "crank"])) {
        return BikeFourteen;
      } else if (checkIncluded(parts, ["front-tire", "frame", "crank"])) {
        return BikeThree;
      } else if (checkIncluded(parts, ["crank", "frame", "front-tire"])) {
        return BikeSeventeen;
      } else if (checkIncluded(parts, ["frame", "handlebar", "saddle"])) {
        return BikeTwenty;
      } else if (checkIncluded(parts, ["handlebar", "saddle", "crank"])) {
        return BikeNineteen;
      }
    } else if (parts.length == 4) {
      if (checkIncluded(parts, ["handlebar", "frame", "crank", "saddle"])) {
        return BikeSix;
      } else if (
        checkIncluded(parts, ["frame", "handlebar", "saddle", "front-tire"])
      ) {
        return BikeTwentyOne;
      } else if (
        checkIncluded(parts, ["frame", "front-tire", "crank", "back-tire"])
      ) {
        return BikeTwo;
      } else if (
        checkIncluded(parts, ["frame", "saddle", "crank", "back-tire"])
      ) {
        return BikeSeven;
      }
    } else if (parts.length == 5) {
      if (
        checkIncluded(parts, [
          "handlebar",
          "frame",
          "crank",
          "saddle",
          "front-tire",
        ])
      ) {
        return BikeFive;
      } else if (
        checkIncluded(parts, [
          "frame",
          "handlebar",
          "saddle",
          "front-tire",
          "back-tire",
        ])
      ) {
        return BikeTwentyTwo;
      } else if (
        checkIncluded(parts, [
          "frame",
          "handlebar",
          "saddle",
          "crank",
          "back-tire",
        ])
      ) {
        return BikeTwentyThree;
      } else if (
        checkIncluded(parts, [
          "frame",
          "front-tire",
          "saddle",
          "crank",
          "back-tire",
        ])
      ) {
        return BikeOne;
      } else if (
        checkIncluded(parts, [
          "handlebar",
          "front-tire",
          "saddle",
          "crank",
          "back-tire",
        ])
      ) {
        return BikeEight;
      } else if (
        checkIncluded(parts, [
          "handlebar",
          "front-tire",
          "saddle",
          "crank",
          "frame",
          "back-tire",
        ])
      ) {
        return BikeEight;
      }
    } else if (parts.length == 6) {
      return Bike;
    }
  };

  function checkIncluded(myArray, checkingArray) {
    if (myArray.length !== checkingArray.length) {
      return false;
    }
    var match = true;
    for (var i = 0; i < checkingArray.length; i++) {
      if (!myArray.includes(checkingArray[i])) {
        match = false;
        break;
      }
    }
    return match;
  }

  function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

  image();
  return (
    <section className="cart-area ptb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center">
            <img height={300} src={image()} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customization;
