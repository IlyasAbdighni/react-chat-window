import React from 'react'

export default (props) => {
  return (
    <div className='sc-message--file' >
      <div className='sc-message--file-name' >
        <a href='#' target='_blank' >{props.data.file.name}</a>
      </div>
      {
        props.data.text ?
          <div className='sc-message--file-text' >
            {props.data.text}
          </div>
          : ''
      }
      {props.data.meta && <p className='sc-message--meta'>{props.data.meta}</p>}
    </div>
  )
}