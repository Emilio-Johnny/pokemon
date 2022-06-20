import React from 'react';
// @ts-ignore
import{ useTable } from 'react-table';


const PokemonTable = () => {
    // This is the data for the table
    const pokemon = React.useMemo( () => [
        {
            name: 'pikachu',
            type: 'electric',
        },
        {
            name: 'squirtle',
            type: 'water',
        },
        {
            name: 'charmander',
            type: 'fire',
        },
        {
            name: 'digglet',
            type: 'dirt',
        },
        {
            name: 'metapod',
            type: 'plant',
        }
    ], []);
    // This is the structure of the table
    const columns = React.useMemo( () => [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Type',
            accessor: 'type',
        },
    ], []);
    const tableInstance = useTable(
        {
            columns,
            pokemon,
        }
    )
        const {
            getTableProps,
            headerGroups,
            rows,
            prepareRow,
            getTableBodyProps,
        } = tableInstance;

    return (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            {headerGroups.map((headerGroup: any) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column: any) => (
                        <th
                            {...column.getHeaderProps()}
                            style={{
                                borderBottom: 'solid 3px red',
                                background: 'aliceblue',
                                color: 'black',
                                fontWeight: 'bold',
                            }}
                        >
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row: any) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell: any) => {
                            return (
                                <td
                                    {...cell.getCellProps()}
                                    style={{
                                        padding: '10px',
                                        border: 'solid 1px gray',
                                        background: 'papayawhip',
                                    }}
                                >
                                    {cell.render('Cell')}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};


export default PokemonTable;