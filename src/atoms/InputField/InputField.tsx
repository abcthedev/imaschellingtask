import React from 'react';

interface IProps {
    id: string;
    type: 'text' | 'password' | 'date' | 'email';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const InputField: React.FC<IProps> = ({ id, type, value, onChange, className }) => {
    return (
        <input
            id={id}
            name={id}
            type={type}
            className={className}
            value={value}
            onChange={onChange}
        />
    );
};

export default InputField;
