import React from 'react'
import { useSelector } from 'react-redux';

const TraslateCopy = ({copyId}) => {
  const data = useSelector(state => state.traslatecopy.traslatecopy)
  const datos = data.find( item => item.copyId === copyId )
  if (datos) {
    return (
      <span name={copyId}>
          {datos.text}
      </span>
    )
  }
 
}

export default TraslateCopy