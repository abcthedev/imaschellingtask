import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button/Button';
import LabeledInput from '../LabeledInput/LabeledInput';

interface Props {
    onSubmit: (row: { name: string; date: string; country: string }) => void;
    initialData?: { name: string; date: string; country: string };
}

const TableForm: React.FC<Props> = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        country: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', date: '', country: '' });
    };

    return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm" noValidate>
            <LabeledInput
                id="name"
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />
            <LabeledInput
                id="date"
                label="Date"
                type="date"
                value={formData.date}
                onChange={handleChange}
            />
            <LabeledInput
                id="country"
                label="Country"
                type="text"
                value={formData.country}
                onChange={handleChange}
            />
            <Button label={!!initialData ? "Update" : "Add"} variant="primary" className="w-100 mt-3" type="submit" />
        </form>
    );
};

export default TableForm;
