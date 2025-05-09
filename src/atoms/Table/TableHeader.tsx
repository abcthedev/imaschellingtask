import React from 'react';

interface IProps {
    label: string;
    onClick: () => void;
}

const TableHeader: React.FC<IProps> = ({ label, onClick }) => (
    <th className="p-2 border cursor-pointer" onClick={onClick}>
        {label} <span className="ms-1">&#x2195;</span>
    </th>
);

export default TableHeader;
