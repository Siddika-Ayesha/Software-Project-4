import color from '../constants/colors';
import { font, fontSize } from '../constants/fonts';
import React from 'react'

type AppProps = {
    children: React.ReactNode
}


const Title = (props: AppProps) =>
    <span style={{
        fontFamily: font.TITLE,
        fontWeight: 'bold',
        fontSize: fontSize.TITLE,
        color: color.MAIN,
    }}>
        {props.children}
    </span>

export default Title