import React from 'react'

const CrawlText = () => {
  return (
    <div id="board">
        <audio preload="auto" autoplay>
            <source src="@/assets/audio/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg"/>
        </audio>
        <div id="content">
            <p id="title">Episode I</p>
            <p id="subtitle">THE CODER'S MENACE</p>
            <br />
            <p id="crawl">The Dark Coder himself, Joe Fraisure, has been scene escaping his home planet "Texas" to defeat The Cohort</p>
            <br />
            <p id="crawl">Meanwhile, The Cohort have established connection with their long lost ally, Blke, and established a basecamp somewhere in the outer rim</p>
            <br />
            <p id="crawl"></p>    
        </div>  
    </div>
  )
}

export default CrawlText