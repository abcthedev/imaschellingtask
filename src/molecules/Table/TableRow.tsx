import React from 'react';
import Button from '../../atoms/Button/Button';
import TableCell from '../../atoms/Table/TableCell';

interface RowData {
  sr: number;
  name: string;
  date: string;
  country: string;
}

interface Props {
  data: RowData;
  onDelete: () => void;
  onEdit: () => void;
}

const TableRow: React.FC<Props> = ({ data, onDelete, onEdit }) => (
  <tr>
    <TableCell>{data.sr}</TableCell>
    <TableCell>{data.name}</TableCell>
    <TableCell>{data.date}</TableCell>
    <TableCell>{data.country}</TableCell>
    <TableCell>
      <div className="d-flex gap-2">
        <Button
          type="button"
          variant="secondary"
          className="btn btn-sm btn-warning"
          onClick={onEdit}
          label="Edit"
        />
        <Button
          type="button"
          variant="danger"
          className="btn btn-sm btn-danger"
          onClick={onDelete}
          label="Delete"
        />
      </div>
    </TableCell>
  </tr>
);

export default TableRow;
