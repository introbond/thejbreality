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
                  color="#80ff00"
                  fontSize={16}
              />
          </div>
      </div>
  );
}

export default Github;