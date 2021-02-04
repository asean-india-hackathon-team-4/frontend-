import React, { useState } from 'react'
import axios from 'axios'


const GIS = () => {

    const [ title, setTitle ] = useState('')

    const [ file, setFile ] = useState('')

    const [ id, setId ] = useState('')

    const select = (event) => {
        setFile(event.target.files[0])
    }

    const upload = () => {
        if(title==='' || file===''){
            window.alert('Choose the file and set the title first !!!')
        }
        else{
            const data = new FormData()
            data.append('title',title)
            data.append('file', file)
            axios.post("http://asean-hackathon2021.herokuapp.com/files/", data, { 
            })
            .then(res => {
                setId(res.data.id)
            })
        }
    }

    const download = () => {
        if(id===''){
            window.alert('Upload the file first!!!')
        }
        else{
            window.location =  `http://asean-hackathon2021.herokuapp.com/download?file_type=kml&file_id=${id}`
        }
    }

    return (
        <div className='gis'>
            <div className='row'>
                <input type="file" name="Select" className='btn select-btn btn-success btn-block' onChange={select}/>
                <input placeholder='Title...' className='input' value={title} onChange={(e)=>setTitle(e.val)}/>
            </div>
            <div className='row'>
                <div className='gis-btn btn btn-dark' onClick={upload}>
                    Upload
                </div>
                <div className='gis-btn btn btn-dark' onClick={download}>
                    Download
                </div>
            </div>
        </div>
    )
}

export default GIS



