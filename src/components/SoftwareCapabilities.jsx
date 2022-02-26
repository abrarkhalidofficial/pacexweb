import React from "react";
import softwareCapabilitesPic from "../assets/softwareCapabilitesPic.png";

function SoftwareCapabilitiesCard({ svg, title }) {
  return (
    <div className="software__capabilities__section__content__card">
      {svg}
      {title}
    </div>
  );
}

export default function SoftwareCapabilities() {
  return (
    <div className="software__capabilities__section">
      <div className="software__capabilities__section__content">
        <img
          src={softwareCapabilitesPic}
          alt="softwareCapabilitesPic"
          className="software__capabilities__section__content__img"
        />
        <div className="software__capabilities__section__content__right">
          <div className="software__capabilities__section__content__right__heading">
            SOFTWARE <br />
            CAPABILITES
          </div>
          <div className="software__capabilities__section__content__right__para">
            Access all the insights you need to intelligently orchestrate your
            logistics from a single platform. Connect once and get full
            visibility into your entire supply chain.
          </div>
        </div>
      </div>
      <div className="software__capabilities__section__content__cards__wrapper">
        <SoftwareCapabilitiesCard
          title="INVENTORY MANGEMENT"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70.893"
              height="78.603"
              viewBox="0 0 70.893 78.603"
            >
              <g id="package" transform="translate(-0.5 0.601)">
                <line
                  id="Line_4"
                  data-name="Line 4"
                  x1="32.947"
                  y1="18.999"
                  transform="translate(19.473 10.085)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <path
                  id="Path_8058"
                  data-name="Path 8058"
                  d="M68.893,53.245V23.959a7.321,7.321,0,0,0-3.661-6.333L39.607,2.983a7.321,7.321,0,0,0-7.321,0L6.661,17.626A7.321,7.321,0,0,0,3,23.959V53.245a7.321,7.321,0,0,0,3.661,6.333L32.286,74.221a7.321,7.321,0,0,0,7.321,0L65.232,59.578A7.321,7.321,0,0,0,68.893,53.245Z"
                  transform="translate(0 0)"
                  fill="rgba(0,0,0,0)"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <path
                  id="Path_8059"
                  data-name="Path 8059"
                  d="M3.27,6.96,35.228,25.447,67.186,6.96"
                  transform="translate(0.718 13.192)"
                  fill="rgba(0,0,0,0)"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <line
                  id="Line_5"
                  data-name="Line 5"
                  y1="36.9"
                  transform="translate(35.947 38.602)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
              </g>
            </svg>
          }
        />
        <SoftwareCapabilitiesCard
          title="Dashboard"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="77.5"
              height="77.5"
              viewBox="0 0 77.5 77.5"
            >
              <path
                id="Icon_material-dashboard"
                data-name="Icon material-dashboard"
                d="M4.5,45.333H37.167V4.5H4.5ZM4.5,78H37.167V53.5H4.5Zm40.833,0H78V37.167H45.333Zm0-73.5V29H78V4.5Z"
                transform="translate(-2.5 -2.5)"
                fill="none"
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="4"
              />
            </svg>
          }
        />
        <SoftwareCapabilitiesCard
          title="TRANSPORT
MANAGEMENT"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="109.122"
              height="90.19"
              viewBox="0 0 109.122 90.19"
            >
              <g
                id="Icon_feather-truck"
                data-name="Icon feather-truck"
                transform="translate(1 -2)"
              >
                <path
                  id="Path_12011"
                  data-name="Path 12011"
                  d="M1.5,4.5H72.492V66.026H1.5Z"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <path
                  id="Path_12012"
                  data-name="Path 12012"
                  d="M24,12H42.931l14.2,14.2V49.862H24Z"
                  transform="translate(48.492 16.164)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <path
                  id="Path_12013"
                  data-name="Path 12013"
                  d="M28.164,35.832A11.832,11.832,0,1,1,16.332,24,11.832,11.832,0,0,1,28.164,35.832Z"
                  transform="translate(6.466 42.026)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
                <path
                  id="Path_12014"
                  data-name="Path 12014"
                  d="M47.664,35.832A11.832,11.832,0,1,1,35.832,24,11.832,11.832,0,0,1,47.664,35.832Z"
                  transform="translate(48.492 42.026)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="5"
                />
              </g>
            </svg>
          }
        />
        <SoftwareCapabilitiesCard
          title="Integrations 
– API & EDI "
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="73.5"
              height="73.5"
              viewBox="0 0 73.5 73.5"
            >
              <g
                id="Group_1550"
                data-name="Group 1550"
                transform="translate(587.371 31.197)"
              >
                <path
                  id="Path_8060"
                  data-name="Path 8060"
                  d="M-513.872-23.389c0-4.7-3.112-7.807-7.811-7.808h-57.878a7.376,7.376,0,0,0-7.809,7.81q0,14.47,0,28.939t0,28.939a7.377,7.377,0,0,0,7.812,7.81q28.939,0,57.878,0c4.7,0,7.808-3.114,7.808-7.813Q-513.871,5.551-513.872-23.389Zm-4.9,58a2.49,2.49,0,0,1-2.772,2.8q-29.085,0-58.169,0a2.5,2.5,0,0,1-2.757-2.811q0-14.542,0-29.085,0-14.466,0-28.932c0-1.928.935-2.871,2.849-2.871h58.016a2.507,2.507,0,0,1,2.834,2.81Q-518.771,5.56-518.773,34.607Z"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <path
                  id="Path_8061"
                  data-name="Path 8061"
                  d="M-515.62,110.759a2.357,2.357,0,0,1,.73-1.761q7.334-7.336,14.673-14.666a2.4,2.4,0,0,1,3.6.066q3.748,3.722,7.462,7.478c.4.4.588.42,1,.006,4.078-4.113,8.184-8.2,12.275-12.3a2.456,2.456,0,0,1,2.484-.793,2.426,2.426,0,0,1,1.324,3.883,6.494,6.494,0,0,1-.526.555q-6.927,6.93-13.857,13.858c-1.6,1.6-2.789,1.6-4.367.025-2.382-2.381-4.776-4.752-7.134-7.156-.412-.42-.6-.387-1,.011q-6.175,6.221-12.391,12.4a2.44,2.44,0,0,1-4.152-.833A2.82,2.82,0,0,1-515.62,110.759Z"
                  transform="translate(-57.068 -95.366)"
                  fill="#fff"
                />
              </g>
            </svg>
          }
        />
      </div>
    </div>
  );
}
