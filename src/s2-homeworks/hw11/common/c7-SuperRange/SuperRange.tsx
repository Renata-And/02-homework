import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: '#00CC22',
        width: '150px',
        '& .MuiSlider-thumb': {
          backgroundColor: '#fff',
          border: '2px solid #00CC22',
          // position: 'relative',
          '&:before': {
            position: 'absolute',
            zIndex: 10,
            width: '6px',
            height: '6px',
            backgroundColor: '#00CC22',
            boxShadow: '0 0 0 0'
          },
        },
        '& .MuiSlider-rail': {
          opacity: 1,
          boxShadow: 'inset 0px 0px 4px -2px #000',
          backgroundColor: '#8B8B8B'
        }
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
