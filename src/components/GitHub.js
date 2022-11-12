import React from "react";
import Typewriter from 'typewriter-effect';
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

function Github() {
  const openInNewTab = (e) => {
    window.open(e, '_blank', 'noopener,noreferrer')
  }

    return (
      <div className="github">
        <h5> Welcome to my little space </h5>
        <div className="github-calendar">
          <div className="interest">
            <ul>
              <li> Slow morning with coffe & code </li>
              <li> Meaningful & peaceful living </li>
              <li> Value investing </li>
              <li> Traveling </li>
              <li> Nature </li>
              <li> Chess </li>
            </ul>
          </div>
            <GitHubCalendar
                  username="introbond"
                  blockSize={15}
                  blockMargin={5}
                  fontSize={16}
                  theme={{
                    level0: '#2d333b',
                    level1: '#0e4429',
                    level2: '#006d32',
                    level3: '#26a641',
                    level4: '#39d353'
                  }}
                  hideTotalCount 
                  hideColorLegend
                  showWeekdayLabels
              />
            <div className="typewriter">
              <Typewriter 
                onInit={(typewriter) => {
                  typewriter.start()
                  .typeString('Still finding myself.')
                  .pauseFor(600)
                  .typeString('<strong>     - James Bond </strong>')
                }}
              />
            </div>
              
          </div>
        <button onClick={() => openInNewTab('https://introbond.github.io/portfolio/')}> 
          MORE INFO
        </button>
      </div>
  );
}

export default Github;