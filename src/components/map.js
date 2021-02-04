import React from 'react'

const Map = ({map}) => {
    return (
        <div>
            { map==='PCG' ? 
                <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="positionclusters_2016_12_31" src="//www.arcgis.com/apps/Embed/index.html?webmap=e40bddd84e554dae92fec44ca81bce70&extent=45.3433,-26.5809,166.4565,44.2199&home=true&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=dark"></iframe></div> : null }
            { map==='PCF' ? 
                <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="positionclusters_2016_12_31" src="//www.arcgis.com/apps/Embed/index.html?webmap=e40bddd84e554dae92fec44ca81bce70&extent=65.6765,4.8669,95.9548,23.4384&home=true&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=legend&basemap_gallery=true&disable_scroll=true&theme=dark"></iframe></div> : null }
            { map==='HMAP' ? 
                <div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Asia Pacific fishing heatmap 2016" src="//www.arcgis.com/apps/Embed/index.html?webmap=74ae584b48fd4e4b977995383894ae80&extent=38.8069,-23.5968,159.9202,46.5342&home=true&zoom=true&previewImage=false&scale=true&details=true&legend=true&active_panel=legend&basemap_gallery=true&disable_scroll=true&theme=dark"></iframe></div> : null }
            { map==='TPSV' ? 
                <div class="embed-container"><iframe width="85vw" height="90vh" title="Tragectory Mapping of Specific Vessels" src="https://app.powerbi.com/view?r=eyJrIjoiODQzNWM2NjYtMzUzNC00MmRlLWExNzUtNGY4ZWJhZDZkMTNlIiwidCI6Ijc4MWY1MWNjLTQ2MTgtNDI0Ny04YmU3LTNiYjc0ODU4YzkwMSIsImMiOjEwfQ%3D%3D&pageName=ReportSectiondd788b79c1c0fc86086f" frameborder="0" allowFullScreen="true"></iframe>
                </div> : null }
            { map==='EEZ' ? 
                <div class="embed-container"><iframe width="85vw" height="90vh" title="Reports of the vessels that crossed EEZ" src="https://app.powerbi.com/view?r=eyJrIjoiODc3NGJmYjYtYjBhMS00YTI0LTljMTctZTQ3NmM0YjU4ZjA1IiwidCI6Ijc4MWY1MWNjLTQ2MTgtNDI0Ny04YmU3LTNiYjc0ODU4YzkwMSIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                </div> : null }
            { map==='PFVBM' ? 
                <div class="embed-container"><iframe width="85vw" height="90vh" title="Projection of fishing vessel behavior based on the month of the year" src="https://app.powerbi.com/view?r=eyJrIjoiOTVkMWZkMjYtNzZkNC00ZDhmLWIxYzktYTY2N2QxN2UzNzRkIiwidCI6Ijc4MWY1MWNjLTQ2MTgtNDI0Ny04YmU3LTNiYjc0ODU4YzkwMSIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                </div> : null }
            { map==='3D' ? 
                <div class="embed-container"><iframe width="85vw" height="90vh" frameborder="0" scrolling="no" allowfullscreen src="https://arcg.is/1H04Gn0"></iframe>
                </div> : null }
        </div>
    )
}

export default Map
