import React from "react";
import "./Home.css";

const Home = () => {
  // Define the style object
  const add = {
    border: "none",
    height: "2px",
    backgroundColor: "black",
    margin: "10px 0",
  };

  // Use it in JSX
  <hr style={add} />;

  return (
    <div className="homeContainer">
      {/* Hero Banner */}
      <header className="heroBanner">
        <div className="heroContent">
          <h1>Police Stops Data Analysis</h1>
          <p>Turning police report data into actionable insights</p>
        </div>
      </header>
      <div className="introduction">
        <h2>Introduction</h2>
        <hr style={add} />
        <div className="intro">
          <p>
            The U.S has largest car traffic in the world propmting active police
            presence on the highway. This report investgates insights from
            police traffic stops dataset.{" "}
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <main className="dashboard">
        <div className="card">
          <h2>Traffic Stops Trend</h2>
          <img
            src="stop_trend_mobile.png"
            alt=""
          />
        </div>
        <div className="card-row">
          <div className="simple-card deep-red">
            <h3>10:00 AM</h3>
            <p className="value">7,350</p>
          </div>

          <div className="simple-card medium-red">
            <h3>9:00 AM</h3>
            <p className="value">6,838</p>
          </div>

          <div className="simple-card light-red">
            <h3>11:00 AM</h3>
            <p className="value">5,877</p>
          </div>
        </div>

        <div className="card">
          <h2>Trends by seasons</h2>
          <img
            src="traffic_stops_by_season.png"
            alt=""
          />
        </div>
        <div className="card">
          <h2>Trends by Time of the Day</h2>
          <img
            src="traffic_stops_time_of_day.png"
            alt=""
          />
        </div>
        <div className="card">
          <h2>Stops by Gender</h2>
          <div className="chart-container">
            <img
              src="gender_doughnut_transparent.png"
              alt="Traffic Stops by Gender"
              className="doughnut"
            />

            <div className="labels">
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#FF6F61" }}></span>
                Male: 68.6%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#6B5B95" }}></span>
                Female: 25.5%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#88B04B" }}></span>
                Unknown: 5.9%
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Trends by Age Group</h2>
          <img
            src="age_group_trend.png"
            alt=""
          />
        </div>
        <div className="card">
          <h2>Stops by Race</h2>

          <div className="chart-container">
            <img
              src="race_doughnut_transparent.png"
              alt="Traffic Stops by Race"
              className="doughnut"
            />

            <div className="labels">
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#FF6F61" }}></span>
                White: 67.8%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#6B5B95" }}></span>
                Black: 13.4%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#88B04B" }}></span>
                Hispanic: 10.4%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#F7CAC9" }}></span>
                Unknown: 5.8%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#92A8D1" }}></span>
                Asian: 2.5%
              </div>
              <div className="label">
                <span
                  className="color-box"
                  style={{ backgroundColor: "#FFA500" }}></span>
                Other: 0.3%
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Violations</h2>
          <img
            src="violation_bar_descending.png"
            alt=""
          />
        </div>
        <div className="card">
          <h2 className="text-lg font-bold mb-4">Drug-Related Stops by Race</h2>

          <div className="chart-container flex flex-col items-center">
            {/* Doughnut PNG */}
            <img
              src="race_drug_doughnut.png"
              alt="Drug Stops Doughnut"
              className="doughnut w-full max-w-[300px] h-auto"
            />

            {/* Labels */}
            <div className="labels mt-4 flex flex-col gap-2">
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#FF6F61" }}></span>
                White: 58.40%
              </div>
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#6B5B95" }}></span>
                Black: 24.7%
              </div>
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#88B04B" }}></span>
                Hispanic: 15.5%
              </div>
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#F7CAC9" }}></span>
                Unknown: 5.3%
              </div>
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#92A8D1" }}></span>
                Asian: 1.3%
              </div>
              <div className="label flex items-center gap-2">
                <span
                  className="color-box w-4 h-4 rounded-sm"
                  style={{ backgroundColor: "#FFA500" }}></span>
                Other: 0.1%
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2>Violations Outcome</h2>
          <img
            src="stop_outcome_bar_descending.png"
            alt=""
          />
        </div>
        <div className="card">
          <h2>Arrests by Race</h2>
          <div className="img-stack">
            <img
              id="odd"
              src="arrest_race_doughnut_design.png"
              alt=""
            />
          </div>
          <div className="labels">
            <div className="label">
              <span
                className="color-box"
                style={{ backgroundColor: "#FF6F61" }}></span>
              White: 55.8%
            </div>
            <div className="label">
              <span
                className="color-box"
                style={{ backgroundColor: "#6B5B95" }}></span>
              Black: 23.3%
            </div>
            <div className="label">
              <span
                className="color-box"
                style={{ backgroundColor: "#88B04B" }}></span>
              Hispanic: 19.4%
            </div>
            <div className="label">
              <span
                className="color-box"
                style={{ backgroundColor: "#F7CAC9" }}></span>
              Asian: 1.4%
            </div>
            <div className="label">
              <span
                className="color-box"
                style={{ backgroundColor: "#92A8D1" }}></span>
              Other: 0.1%
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Police Data Analysis Project</p>
        <div className="socials">
          <span>🔗 GitHub</span>
          <span>🐦 Twitter</span>
          <span>📧 Contact</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
