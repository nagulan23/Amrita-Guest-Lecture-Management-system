//import Typical from "react-typical";
import { StrictMode } from "react";
export default function CountBox() {
  return (
    <div
      style={{
        textAlign: "left",
        padding: "20px",
        margin: "50px",
        width: "25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: "4px solid black",
        borderRadius: "5px",
        boxShadow: "0px 0px 20px black",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 60,
            fontWeight: "bold",
          }}
        >
          5
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Ongoing Lectures
          {/* <Typical
        steps={[' ', 1000, '  Ongoing Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 60,
            fontWeight: "bold",
          }}
        >
          3
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Upcoming Lectures
          {/* <Typical
        steps={[' ', 1000, '  Upcoming Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 60,
            fontWeight: "bold",
          }}
        >
          1
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Registered Lectures
          {/* <Typical
        steps={[' ', 1000, '  Cancelled Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
        <div style={{ width: "100%",textAlign:"center" }}>
          <div
            style={{
              width: "30%",
              height: "8px",
              backgroundColor: "#242526",
              borderRadius: "20px",
              alignSelf: "center",
              display:"inline-block"
            }}
          />
        </div>
      </div>
    </div>
  );
}
