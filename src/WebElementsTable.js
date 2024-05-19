// WebElementsTable.js
import React from 'react';

function WebElementsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ejemplo 1</td>
          <td>https://www.ejemplo1.com</td>
        </tr>
        <tr>
          <td>Ejemplo 2</td>
          <td>https://www.ejemplo2.com</td>
        </tr>
        {/* Agrega más filas según sea necesario */}
      </tbody>
    </table>
  );
}

export default WebElementsTable;
