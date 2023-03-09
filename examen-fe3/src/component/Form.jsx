import { useState } from "react"
import styles from './Form.css'


function Form(){
    //Variable para ontrolar el input del primer form
    //const [inputValue, setInputValue] = useState('')
    const [inputCancion, setInputCancion] = useState('')
    const [inputArtista, setinputArtista] = useState('')
    const [inputGenero,  setinputGenero] = useState('')


    const [mostrarForm, setMostrarForm] = useState (false)
    const [mostrarAlert, setMostrarAlert] = useState (false)


    //Function para ser llamada cuando se presiona el button "Agregar"
    function handleSubmit(event){
        event.preventDefault()
        console.log('Validando...')
        
        if(inputCancion.length > 3 || inputCancion.startsWith(' ') || inputArtista.length < 6 ){
            setMostrarAlert(true)
        }
        else{
            setMostrarAlert(false)
        }
        
    }

    return ( 
    <>
        <form onSubmit={handleSubmit} className = 'formulario'>
            <h2> Cuestionario Musical</h2>
            <label for="cancion">Canción favorita:</label>
            <input type="text" value={inputCancion} onChange={(e)=> setInputCancion(e.target.value)} name="cancion" /> <br></br>
            
            <label for="artista">Artista favorito:</label>
            <input type="text" value={inputArtista} onChange={(e)=> setinputArtista(e.target.value)} name="artista" /><br></br>
            
            <label for="genero">Género favorito:</label>
            <input type="text" value={inputGenero} onChange={(e)=> setinputGenero(e.target.value)}  name="genero" /><br></br>
            
            <input type="submit" value="Enviar" />
        </form>
        {
            mostrarAlert
            ?
        <>
            <h3 className="alert" >Por favor chequea que la información sea correcta</h3>
        </>
        :
        <div className="card">
            <h2>Resumen de tu informacion</h2>
            <p>{inputCancion}</p>
            <p>{inputArtista}</p>
            <p>{inputArtista}</p>
        </div>
        
        } 
    </>
    )
}

export default Form