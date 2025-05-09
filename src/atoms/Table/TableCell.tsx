import React from 'react';

const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <td className="p-2 border">{children}</td>
);

export default TableCell;
