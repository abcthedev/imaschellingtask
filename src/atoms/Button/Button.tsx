import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface IProps {
    variant?: ButtonVariant;
    label: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<IProps> = ({
    variant = 'primary',
    label,
    type = 'button',
    onClick,
    className = '',
}) => {
    const variantClass = `btn btn-${variant}`;
    return (
        <button
            type={type}
            className={`${variantClass} ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
