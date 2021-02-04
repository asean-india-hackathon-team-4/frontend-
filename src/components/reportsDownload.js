import React from 'react'
import WhiteMarlin from '../assets/white-marlin.jpg'
import PacificHaliput from '../assets/pacific-haliput.png'
import RedGroper from '../assets/red-groper.jpg'
import YellowFin from '../assets/yellowfin-tuna.png'


const DownloadReports = () => {

    const download = (url,name) => {
        fetch(url)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let link = document.createElement('a');
                    link.href = url;
                    link.setAttribute(
                    'download',
                    name,
                    );
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
				});
		});
    }

    return (
        <div className='reports-download-col'>
            <div className='reports-download-row'>
                <div className='reports'>
                    <div className='report-title'>
                        White Marlin
                    </div>
                    <div className='report-content'>
                        <img src={WhiteMarlin} className='fish-img'/>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=white-marlin','white-marlin.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='report-title'>
                        Pacific Halibut
                    </div>
                    <div className='report-content'>
                        <img src={PacificHaliput} className='fish-img'/>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=pacific-halibut','pacific-halibut.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div className='reports-download-row'>
                <div className='reports'>
                    <div className='report-title'>
                        Red Grouper
                    </div>
                    <div className='report-content'>
                        <img src={RedGroper} className='fish-img'/>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=red-grouper','red-groper.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='report-title'>
                        Yellowfin Tuna
                    </div>
                    <div className='report-content'>
                        <img src={YellowFin} className='fish-img'/>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=yellowfin-tuna','yellofin-tuna.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadReports


