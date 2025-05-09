import React, { useState } from 'react';
import Label from '../../atoms/Label/Label';
import InputField from '../../atoms/InputField/InputField';
import ErrorMessage from '../../atoms/Error/ErrorMessage';

interface IProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordField: React.FC<IProps> = ({ value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const validatePassword = (password: string): string | null => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      return 'Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.';
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const errorMsg = validatePassword(e.target.value);
    setError(errorMsg);
  };

  return (
    <div className="mb-3">
      <Label htmlFor="password" label="Password" />
      <div className="input-group has-validation">
        <InputField
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        />
        <span className="input-group-text bg-white border-start-0">
          <i
            className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'} cursor-pointer`}
            role="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={toggleShowPassword}
          ></i>
        </span>
      </div>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default PasswordField;
