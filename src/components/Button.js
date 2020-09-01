import React from 'react';
import './Button.css';

// 사용할 스타일을 지정하여 배열(문자열primitive)에 넣어준다.(색상)
const STYLE = [
    'btn--primary',
    'btn--outline'
]
// 사용할 스타일을 지정하여 배열(문자열primitive)에 넣어준다.(크기)
const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    // 매개변수(values)
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    // 함수 실행코드
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0] // btn--primary
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] // btn--medium

    return(
    <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}  onClick={onClick} type={type}>
        {children}
    </button>
    )
}