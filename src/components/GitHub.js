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
        <div className="github-calendar">
          <div className="typewriter">
            <Typewriter 
              onInit={(typewriter) => {
                typewriter.start()
                .typeString('slow morning with coffee & code');
              }}
          />
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
          </div>
        <button onClick={() => openInNewTab('https://introbond.github.io/portfolio/')}> 
          MORE INFO
        </button>
      </div>
  );
}

export default Github;