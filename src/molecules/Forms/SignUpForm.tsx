import React, { useState } from 'react';
import EmailField from '../EmailField/EmailField';
import LabeledInput from '../LabeledInput/LabeledInput';
import PasswordField from '../PasswordField/PasswordField';
import UserNameFiled from '../UserNameField/UserNameField';
import Button from '../../atoms/Button/Button';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSuccess(true);
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" noValidate>
      <UserNameFiled value={formData.username} onChange={handleChange} />
      <EmailField value={formData.email} onChange={handleChange} />
      <PasswordField value={formData.password} onChange={handleChange} />

      <Button label="Sign Up" type="submit" variant="primary" className="w-100" />

      {formSuccess && <div className="mt-3 alert alert-success">Form submitted successfully!</div>}
    </form>
  );
};

export default SignUpForm;
