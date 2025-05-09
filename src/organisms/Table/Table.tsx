import React, { useState } from 'react';
import TableHeader from '../../atoms/Table/TableHeader';
import TableRow from '../../molecules/Table/TableRow';
import ModalWrapper from '../../atoms/Modal/Modal';
import TableForm from '../../molecules/Forms/TableForm';
import Button from '../../atoms/Button/Button';

const formatDate = (date: string) => new Date(date).toLocaleDateString('en-IN');

const Table: React.FC = () => {
    const [rows, setRows] = useState([
        { sr: 1, name: 'Alice', date: formatDate('01/05/2020'), country: 'India' },
        { sr: 2, name: 'Bob', date: formatDate('02/05/2022'), country: 'USA' },
        { sr: 3, name: 'Charlie', date: formatDate('01/12/2020'), country: 'UK' },
        { sr: 4, name: 'David', date: formatDate('01/11/2024'), country: 'Germany' },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortAsc, setSortAsc] = useState(true);

    const handleSort = (field: keyof typeof rows[0]) => {
        const isAsc = sortField === field ? !sortAsc : true;
        const sorted = [...rows].sort((a, b) =>
            isAsc ? String(a[field]).localeCompare(String(b[field])) : String(b[field]).localeCompare(String(a[field]))
        );
        setRows(sorted);
        setSortField(field);
        setSortAsc(isAsc);
    };

    const handleDelete = (index: number) => {
        const updated = [...rows];
        updated.splice(index, 1);
        updated.forEach((r, i) => (r.sr = i + 1));
        setRows(updated);
    };

    const handleAddOrUpdate = (row: { name: string; date: string; country: string }) => {
        if (editIndex !== null) {
            const updated = [...rows];
            updated[editIndex] = {
                ...updated[editIndex],
                name: row.name,
                date: formatDate(row.date),
                country: row.country,
            };
            setRows(updated);
            setEditIndex(null);
        } else {
            const newRow = {
                sr: rows.length + 1,
                name: row.name,
                date: formatDate(row.date),
                country: row.country,
            };
            setRows([...rows, newRow]);
        }
        setShowModal(false);
    };

    const handleEdit = (index: number) => {
        setEditIndex(index);
        setShowModal(true);
    };

    const getInitialFormData = () => {
        if (editIndex === null) return undefined;
        const row = rows[editIndex];
        const [day, month, year] = row.date.split('/');
        return {
            name: row.name,
            date: formatDate(`${day}-${month}-${year}`),
            country: row.country,
        };
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Table Module</h3>
                <Button
                    variant="secondary"
                    label="Add"
                    onClick={() => {
                        setEditIndex(null);
                        setShowModal(true);
                    }}
                />
            </div>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <TableHeader label="Sr. No." onClick={() => handleSort('sr')} />
                        <TableHeader label="Name" onClick={() => handleSort('name')} />
                        <TableHeader label="Date" onClick={() => handleSort('date')} />
                        <TableHeader label="Country" onClick={() => handleSort('country')} />
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => (
                        <TableRow
                            key={idx}
                            data={row}
                            onDelete={() => handleDelete(idx)}
                            onEdit={() => handleEdit(idx)}
                        />
                    ))}
                </tbody>
            </table>

            <ModalWrapper
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                    setEditIndex(null);
                }}
                title={editIndex !== null ? 'Edit Entry' : 'Add Entry'}
            >
                <TableForm onSubmit={handleAddOrUpdate} initialData={getInitialFormData()} />
            </ModalWrapper>
        </div>
    );
};

export default Table;
