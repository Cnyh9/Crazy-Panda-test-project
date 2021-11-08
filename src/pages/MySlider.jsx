import { Button, Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
import { Box, createTheme, rgbToHex, ThemeProvider } from '@mui/system';

import React, { useEffect, useState, useMemo } from 'react'

export const MySlider = () => {

    const [switchBtn, setSwitchBtn] = useState(true)
    const [textSliderValue, setTextSliderValue] = useState(0)
    const [textColorValue, setTextColorValue] = useState({ r: 0, g: 0, b: 0 })


    const txt = useMemo(() => {
        if (textSliderValue < 255) {
            setTextColorValue({...textColorValue, r: textSliderValue})
        }
        if (textSliderValue > 255) {
            setTextColorValue({...textColorValue, g: textSliderValue - 255})
        }
        if (textSliderValue > 510) {
            setTextColorValue({...textColorValue, r: Math.abs(765 - textSliderValue)})
        }
        if (textSliderValue > 765) {
            setTextColorValue({...textColorValue, b: textSliderValue - 765})
        }
        if (textSliderValue > 1020) {
            setTextColorValue({...textColorValue, g: Math.abs(1275 - textSliderValue)})
        }
        if (textSliderValue > 1275) {
            setTextColorValue({...textColorValue, r: Math.abs(textSliderValue - 1275)})
        }
        if (textSliderValue > 1530) {
            setTextColorValue({...textColorValue, g: textSliderValue - 1500})
        }
    }, [textSliderValue])


    const [bgcSliderValue, setbgcSliderValue] = useState(1785)
    const [bgColorValue, setBgColorValue] = useState({ r: 0, g: 0, b: 0 })

    const bgc = useMemo(() => {
        if (bgcSliderValue < 255) {
            setBgColorValue({...bgColorValue, r: bgcSliderValue})
        }
        if (bgcSliderValue > 255) {
            setBgColorValue({...bgColorValue, g: bgcSliderValue - 255})
        }
        if (bgcSliderValue > 510) {
            setBgColorValue({...bgColorValue, r: Math.abs(765 - bgcSliderValue)})
        }
        if (bgcSliderValue > 765) {
            setBgColorValue({...bgColorValue, b: bgcSliderValue - 765})
        }
        if (bgcSliderValue > 1020) {
            setBgColorValue({...bgColorValue, g: Math.abs(1275 - bgcSliderValue)})
        }
        if (bgcSliderValue > 1275) {
            setBgColorValue({...bgColorValue, r: Math.abs(bgcSliderValue - 1275)})
        }
        if (bgcSliderValue > 1530) {
            setBgColorValue({...bgColorValue, g: bgcSliderValue - 1500})
        }
    }, [bgcSliderValue])



    const handleTextColorChange = (e, newValue) => {
        setTextSliderValue(newValue)
    }

    const handleBgcColorChange = (e, newValue) => {
        setbgcSliderValue(newValue)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
            <Box sx={{width: '600px'}}>
                <div style={{
                    padding: '0 15px',
                    border: '1px solid black',
                    marginBottom: '30px',
                    color: `rgb(${textColorValue.r}, ${textColorValue.g}, ${textColorValue.b})`,
                    backgroundColor: `rgb(${bgColorValue.r}, ${bgColorValue.g}, ${bgColorValue.b})`
                }}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita debitis veniam cum nemo, explicabo quos esse quae, odit exercitationem aliquid a quidem doloremque aliquam? Iure ipsam officiis aut perferendis maxime?
                    </p>
                </div>
                {switchBtn
                ?
                    <Slider className="slider__text" 
                        value={textSliderValue}
                        onChange={handleTextColorChange}
                        max={1785}
                        min={0.01}
                    />
                :
                <Slider className="slider__bgc" 
                    value={bgcSliderValue}
                    onChange={handleBgcColorChange}
                    max={1785}
                    min={0}
                />
                }
                
                
                <Stack direction="row" justifyContent="space-evenly" sx={{marginTop: '30px'}}>
                    <Button disabled={switchBtn} onClick={() => setSwitchBtn(!switchBtn)} variant="contained" >Text</Button>
                    <Button disabled={!switchBtn} onClick={() => setSwitchBtn(!switchBtn)} variant="contained">Background</Button>
                </Stack>
            </Box>
        </div>
    )
}
