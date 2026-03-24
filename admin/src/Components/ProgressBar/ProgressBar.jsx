import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className='w-[100px] h-auto overflow-hidden rounded-sm bg-[#f1f1f1]'>
      <span className={`w-[${props.value}%] h-[6px] flex items-center ${ props.type==='success' && 'bg-green-500'} ${ props.type==='error' && 'bg-pink-500'} ${ props.type==='warning' && 'bg-yellow-500'}`}></span>
    </div>
  )
}

export default ProgressBar 
