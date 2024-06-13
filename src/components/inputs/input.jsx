import React from 'react';
import styled from './input.module.scss'
const Input = ({id, placeHolder="مقدار را وارد کنید"}) => (
    <>
        <input className={styled.input} name={id} placeholder={placeHolder}/>
    </>
);

export default Input;