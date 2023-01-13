import './tabla.css';


function Tabla() {
    
    return (
      <div className='tabla_datos'>
        <table id='tablaDeTransaccion'>
            <tbody>
                <tr>
                    <th>
                        Fecha
                    </th>
                    <th>
                        Tipo
                    </th>
                    <th>
                        Descripción
                    </th>
                    <th>
                        Monto
                    </th>
                    <th className='total'>
                        Total
                    </th>
                </tr>
                <tr>
                    <td>Fecha/Mes/Año</td>
                    <td>Tipo</td>
                    <td>Descripción</td>
                    <td>Monto</td>
                </tr>
                <tr>
                    <td>Fecha/Mes/Año</td>
                    <td>Tipo</td>
                    <td>Descripción</td>
                    <td>Monto</td>
                </tr>
            </tbody>
        </table>
        
      </div>
    );
  }
  
  export default Tabla;