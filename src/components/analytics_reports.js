import React from 'react'

const Analytics = () => {
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
                        Report 1
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-1','report-1.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='report-title'>
                        Report 2
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-2','report-2.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div className='reports-download-row'>
                <div className='reports'>
                    <div className='report-title'>
                        Report 3
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-3','report-3.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='report-title'>
                        Report 4
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-4','report-4.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
            </div>
            <div className='reports-download-row'>
                <div className='reports'>
                    <div className='report-title'>
                        Report 5
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-5','report-5.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
                <div className='reports'>
                    <div className='report-title'>
                        Report 6
                    </div>
                    <div className='report-content'>
                        <div onClick={()=>download('http://asean-hackathon2021.herokuapp.com/download/?file_type=report&fish_name=report-6','report-6.pdf')} className='download-btn btn btn-dark'>
                            Download
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics