import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyDown, onRemove})=>{
    return (
      <div className="form">
        <input value={value} onChange={onChange} onKeyDown={onKeyDown} onRemove={onRemove} />
        <button className="create-button" onClick={onCreate} >추가</button>
      </div>
    );
};

export default Form;