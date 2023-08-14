import React from 'react'
import Container from '../Container'
import './style.css'
export default function Table({ data, cols, onRowClick = () => { } }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.key}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} onClick={() => onRowClick(row)}>
              {cols.map((col) => (
                <td key={`${row.id + col.key}`}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
