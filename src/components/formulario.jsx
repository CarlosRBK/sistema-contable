import './formulario.css';
import Boton from './button'
import Tabla from './tabla';
function Formulario() {

    const manejarClick = (e) => {
      const form = document.getElementById("controlDeGastos");
      e.preventDefault();
      let controlFormData = new FormData(form)
      console.log(e)
      console.log(form)
    } 

    return (
      <div className="formulario">
        <h1>Control de gastos</h1>
        <form id='controlDeGastos'>
          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" />

          <label htmlFor="tipoDeTransaccion">Tipo:</label>
          <select type="tipo" id="tipoDeTransaccion">
            <option value="" name="tipo">Seleccionar</option>
            <option value="ingreso">ENTRADA</option>
            <option value="egreso">SALIDA</option>
          </select>

          <label htmlFor="descripcion">Descipcion</label>
          <input type="text" id="descripcion" name="descripcion" />

          <label htmlFor="monto">Monto</label>
          <input type="number" id="monto" name="monto" />
          <Boton 
          manejarClick={manejarClick}/>
        </form>   
      </div>

    );
  }

  
  export default Formulario;
  