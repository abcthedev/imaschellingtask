// molecules/UsernameInput.tsx
import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import InputField from '../../atoms/InputField/InputField';
import ErrorMessage from '../../atoms/Error/ErrorMessage';

interface IProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserNameFiled: React.FC<IProps> = ({ value, onChange }) => {
    const [error, setError] = useState<string>('');

    const validateUsername = (username: string) => {
        if (username.trim() === '') {
            setError('Username is required');
        } else {
            setError('');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const username = e.target.value;
        onChange(e);
        validateUsername(username);
    };

    return (
        <div className="mb-3">
            <Label htmlFor="username" label="Username" />
            <InputField
                id="username"
                type="text"
                value={value}
                onChange={handleChange}
                className={`form-control ${error ? 'is-invalid' : ''}`}
            />
            {error && <ErrorMessage message={error} />}
        </div>
    );
};

export default UserNameFiled;
