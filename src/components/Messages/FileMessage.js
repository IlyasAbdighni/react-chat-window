import React from 'react'

const FileMessage = (props) => {
  return (
    <div className='sc-message--file' >
      <div className='sc-message--file-name' >
        <a href={props.data.file.url ? props.data.file.url : '#'} target='_blank' >{props.data.file.name}</a>
      </div>
      {
        (props.data.text && props.data.text !== "undefined") ?
          <div className='sc-message--file-text' >
            {props.data.text}
          </div>
          : ''
      }
      {props.data.meta && <p className='sc-message--meta'>{props.data.meta}</p>}
    </div>
  )
}

export default FileMessage