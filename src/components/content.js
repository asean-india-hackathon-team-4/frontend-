import React, { useState } from 'react'
import Navigation from './navigation'
import Map from "./map";
import RedFlags from './redFlags'
import DownloadReports from './reportsDownload'
import FishVulnerability from './fishVulnerabilityPlot'
import Analytics from './analytics_reports'
import LiveBidding from './liveBidding';
// import GIS from './gis'


const Content = () => {

    const [ content, changeContent ] = useState('map')

    const [ map, changeMap ] = useState('PCG')

    return (
        <div className='content'>
            <Navigation map={map} content={content} changeMap={changeMap} changeContent={changeContent}/>
            {content==='map' && <Map map={map}/>}
            {content==='red_flags' && <RedFlags/>}
            {content==='download_fish_reports' && <DownloadReports/>}
            {content==='download_analytics_reports' && <Analytics/>}
            {content==='plot' && <FishVulnerability/>}
            {content==='live_bidding' && <LiveBidding />}
            {/* {content==='GIS' && <GIS/>} */}
        </div>
    )
}

export default Content