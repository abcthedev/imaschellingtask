import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import InputField from '../../atoms/InputField/InputField';
import ErrorMessage from '../../atoms/Error/ErrorMessage';

interface IProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailField: React.FC<IProps> = ({ value, onChange }) => {
    const [error, setError] = useState<string | null>(null);

    const validateEmail = (email: string): string | null => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            return 'Please enter a valid email address.';
        }
        return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        const errorMsg = validateEmail(e.target.value);
        setError(errorMsg);
    };

    return (
        <div className="mb-3">
            <Label htmlFor="email" label="Email" />
            <InputField
                id="email"
                type="email"
                value={value}
                onChange={handleChange}
                className={`form-control ${error ? 'is-invalid' : ''}`}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default EmailField;
