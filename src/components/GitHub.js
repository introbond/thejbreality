import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

function Github() {
  const openInNewTab = (e) => {
    window.open(e, '_blank', 'noopener,noreferrer')
  }

    return (
      <div className="github">
        <button onClick={() => openInNewTab('https://introbond.github.io/portfolio/')} > look under the hood </button>
        <div className="github-calendar">
        <p> Recharging in nature, slow morning with coffee & code. </p> 
            <GitHubCalendar
                  username="introbond"
                  blockSize={15}
                  blockMargin={5}
                  fontSize={16}
                  theme={{
                    level0: '#252526',
                    level1: '#4e4e4f',
                    level2: '#6d6d6e',
                    level3: '#939396',
                    level4: '#f5f5f5'
                  }}
                  showWeekdayLabels
              />  
          </div>
      </div>
  );
}

export default Github;