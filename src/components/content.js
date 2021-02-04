import React, { useState } from 'react'
import Navigation from './navigation'
import Map from "./map";
import RedFlags from './redFlags'
import DownloadReports from './reportsDownload'
import FishVulnerability from './fishVulnerabilityPlot'
import Analytics from './analytics_reports'
import GIS from './gis'


const Content = () => {

    const [ content, changeContent ] = useState('map')

    const [ map, changeMap ] = useState('PCG')

    return (
        <div className='content'>
            <Navigation map={map} content={content} changeMap={changeMap} changeContent={changeContent}/>
            {content==='map' ? <Map map={map}/> : null}
            {content==='red_flags' ? <RedFlags/> : null}
            {content==='download_fish_reports' ? <DownloadReports/> : null}
            {content==='download_analytics_reports' ? <Analytics/> : null}
            {content==='plot' ? <FishVulnerability/> : null}
            {content==='GIS' ? <GIS/> : null}
        </div>
    )
}

export default Content