import React from 'react';

interface IProps {
    htmlFor: string;
    label: string;

}

const Label: React.FC<IProps> = ({ htmlFor, label }) => {
    return (
        <label htmlFor={htmlFor} className="form-label">
            {label}
        </label>
    );
};

export default Label;
