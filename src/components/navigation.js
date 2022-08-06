import React, { useState, useContext } from 'react'
import { HeaderContext } from '../context/headerContext'
import ExploreIcon from '@material-ui/icons/Explore';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TableChartIcon from '@material-ui/icons/TableChart';

const Navigation = ({map,content,changeMap,changeContent}) => {
    
    const [ mapMenu, toggleMapMenu ] = useState(false)

    const [ header, setHeader ] = useContext(HeaderContext)

    const updateContentPage = (newContent) => {
        if(newContent!==content){
            if(newContent==='red_flags'){
                setHeader('Red Flag: For crossing EEZ')
            }
            else if(newContent==='download_fish_reports'){
                setHeader('Download Fish Reports')
            }
            else if(newContent==='download_analytics_reports'){
                setHeader('Download Analytics Reports')
            }
            else if(newContent==='plot'){
                setHeader('Fish Vulnerability')
            }
            else if(newContent==='live_bidding'){
                setHeader('Live Bidding')
            }
            // else if(newContent==='GIS'){
            //     setHeader('GIS')
            // }
            changeContent(newContent)
        }
    }

    const mapHandler = (newMap) => {
        if(map!==newMap){
            if(newMap==='PCG'){
                setHeader('Position Clustering based on Geartypes')
            }
            else if(newMap==='PCF'){
                setHeader('Position Clustering based on Flags')
            }
            else if(newMap==='HMAP'){
                setHeader('Heat Map of Asia Pacific')
            }
            else if(newMap==='TPSV'){
                setHeader('Tragectory Mapping of Specific Vessels')
            }
            else if(newMap==='PFVBM'){
                setHeader('Projection of fishing vessel behavior based on the month of the year')
            }
            else if(newMap==='3D'){
                setHeader('3D visualisation of fishing hours')
            }
            else{
                setHeader('Reports of the vessels that crossed EEZ')
            }
            changeMap(newMap)
        }
    }

    return (
        <div>
            {mapMenu ?
                <div className='map-menu'>
                    <div className='map-menu-title'>
                        Featured Maps
                    </div>
                    <div className='nav-right'>
                        <CloseIcon title='Close' id='close-but' onClick={()=>{toggleMapMenu(!mapMenu)}} className='close-button nav-item'></CloseIcon>
                    </div>
                    <div className='map-options'>
                        {map==='PCG' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('PCG')}}>
                                Position Clustering based on Geartypes
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('PCG')}}>
                                Position Clustering based on Geartypes
                            </div>
                        }
                        {map==='PCF' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('PCF')}}>
                                Position Clustering based on Flags
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('PCF')}}>
                                Position Clustering based on Flags
                            </div>
                        }
                        {map==='HMAP' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('HMAP')}}>
                                Heat Map of Asia Pacific
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('HMAP')}}>
                                Heat Map of Asia Pacific
                            </div>
                        }
                    </div>
                    <div className='map-options'>
                        {map==='TPSV' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('TPSV')}}>
                                Tragectory Mapping of Specific Vessels
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('TPSV')}}>
                                Tragectory Mapping of Specific Vessels
                            </div>
                        }
                        {map==='EEZ' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('EEZ')}}>
                                Reports of the vessels that crossed EEZ
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('EEZ')}}>
                                Reports of the vessels that crossed EEZ
                            </div>
                        }
                        {map==='PFVBM' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('PFVBM')}}>
                                Projection of fishing vessel behavior based on the month of the year
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('PFVBM')}}>
                                Projection of fishing vessel behavior based on the month of the year
                            </div>
                        }
                        {map==='3D' ? 
                            <div className='map-option img-btn active-btn btn btn-dark' onClick={()=>{mapHandler('3D')}}>
                                3D visualisation of fishing hours
                            </div> : 
                                <div className='map-option img-btn btn btn-dark' onClick={()=>{mapHandler('3D')}}>
                                3D visualisation of fishing hours
                            </div>
                        }
                    </div>
                </div>
            : null}
            <div className='navigation'>
                <div className='nav-option' onClick={()=>{updateContentPage('map')}}>
                    <ExploreIcon className='nav-option-icon'/>
                    <div className='nav-option-title' onDoubleClick={()=>{toggleMapMenu(!mapMenu)}}>
                        Featured Maps
                    </div>
                </div>
                <div className='nav-option' onClick={()=>{updateContentPage('red_flags')}}>
                    <TableChartIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        Red Flags
                    </div>
                </div>
                <div className='nav-option' onClick={()=>{updateContentPage('download_fish_reports')}}>
                    <CloudDownloadIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        Fish Reports Download
                    </div>
                </div>
                <div className='nav-option' onClick={()=>{updateContentPage('download_analytics_reports')}}>
                    <CloudDownloadIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        Analytics Reports Download
                    </div>
                </div>
                <div className='nav-option' onClick={()=>{updateContentPage('plot')}}>
                    <ExploreIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        Fish Vulnerability
                    </div>
                </div>
                <div className='nav-option' onClick={()=>{updateContentPage('live_bidding')}}>
                    <ExploreIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        Live Bidding
                    </div>
                </div>
                {/* <div className='nav-option' onClick={()=>{updateContentPage('GIS')}}>
                    <ExploreIcon className='nav-option-icon'/>
                    <div className='nav-option-title'>
                        GIS
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navigation