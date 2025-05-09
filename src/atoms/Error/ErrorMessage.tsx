import React from 'react';

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => (
  <div className="invalid-feedback d-block">{message}</div>
);

export default ErrorMessage;
