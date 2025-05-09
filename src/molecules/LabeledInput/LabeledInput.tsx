import React from 'react';
import Label from '../../atoms/Label/Label';
import InputField from '../../atoms/InputField/InputField';

interface IProps {
    id: string;
    label: string;
    type: 'text' | 'password' | 'date' | 'email';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput: React.FC<IProps> = ({ id, label, type, value, onChange }) => {
    return (
        <div className="mb-3">
            <Label htmlFor={id} label={label} />
            <InputField id={id} type={type} value={value} onChange={onChange} className="form-control" />
        </div>
    );
};

export default LabeledInput;
