import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const AvatarTextCell = ({ avatar, text }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} className='avatar-table' />
        <div>{text}</div>
    </div>
);

export default function Table({ data: initialData, columns, action }) {
    const [data, setData] = useState(initialData);

    const visibleData = data.slice();

    return (
        <table className="table" border={0} >
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column}>{column}</th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {visibleData.map((row, index) => (
                    <tr key={index}>
                        {row.avatar ? (
                            <td >
                                <AvatarTextCell
                                    avatar={row.avatar}
                                    text={row.name ? row.name : row.username || row.titre || row.duree || row.type} />
                            </td>
                        ) : (
                            <td >
                                <div>{row.name ? row.name : row.username || row.titre || row.duree || row.type}</div>
                            </td>
                        )}
                        {columns.slice(1).map((column) => (
                            <td key={column} >
                                {row[column]}
                            </td>
                        ))}
                        {action ? (
                            <td style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {/* <button onClick={() => handleEditRow(index, {columnToUpdate: newValue})} className='button-table-action'>{<FaPen/>}</button> */}
                                <button className='button-table-action'>{<MdDelete />}</button>
                            </td>
                        ) : (
                            <td />
                        )}

                    </tr>
                ))}
            </tbody>
        </table>
    )
}
