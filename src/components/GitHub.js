import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./GitHub.css";

function Github() {
  const openInNewTab = (e) => {
    window.open(e, '_blank', 'noopener,noreferrer')
  }

    return (
      <div className="github">
        <button onClick={() => openInNewTab('https://introbond.github.io/portfolio/')} > LOOK UNDER THE HOOD </button>
        <div className="github-calendar">
        <p> Recharging in nature, slow morning with coffee & code. </p> 
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
                  showWeekdayLabels
              />  
          </div>
      </div>
  );
}

export default Github;