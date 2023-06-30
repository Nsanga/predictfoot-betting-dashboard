import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack/Stack';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { FaPen } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
// import '../styles/globals.css'

const AvatarTextCell = ({ avatar, text }) => (
    <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar src={avatar} className='avatar-table' />
        <div>{text}</div>
    </div>
);

const ITEMS_PER_PAGE = 5;

export default function Table({ data: initialData, columns, action }) {
    const [data, setData] = useState(initialData);

    const [currentPage, setCurrentPage] = useState(0);

    const start = currentPage * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const visibleData = data.slice(start, end);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(totalPages - 1, prevPage + 1));
    };

    const handleDeleteRow = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    const handleEditRow = (index, updatedValues) => {
        setData(data.map((row, i) => i === index ? {...row, ...updatedValues} : row));
      };
      


    return (
        <>
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
                                <td style={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
                                {/* <button onClick={() => handleEditRow(index, {columnToUpdate: newValue})} className='button-table-action'>{<FaPen/>}</button> */}
                                <button onClick={() => handleDeleteRow(index)} className='button-table-action'>{<MdDelete/>}</button>
                            </td>
                            ): (
                                <td />
                            )}
                            
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='div-button-current-page'>
                <button className='button-current-page' onClick={handlePrevPage} disabled={currentPage === 0}>
                    {<FiChevronLeft />}
                </button>
                <button className='button-current-page' onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                    {<FiChevronRight />}
                </button>

            </div>
        </>
    )
}
