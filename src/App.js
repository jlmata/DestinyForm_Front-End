import React from 'react';

class App extends React.Component{
  constructor(){
  super()
  this.state={
    claseGuardian:' ',
    raza:' ',
    genero:' ',
    claseHabilidad:' ',
    nombrePersonaje:' ',
    gamerTag:' '

  }  
}

//Handle
handleInput=(e)=>{
  const {value,name} = e.target;
  this.setState({
      [name]:value
  });

}

handleSelect = (e) =>{
  const {value,name} = e.target;
  this.setState({
      [name]:value
  })

}


//Renderizar el componente
render(){
  console.log(this.state)
  return(
    <div>
      <h1>Destiny Guardian Database</h1>
      
      <form className="card-body">

        <div>
        <h2>Seleccione tu clase</h2>
        <select onChange ={this.handleSelect} name = "claseGuardian" className = "form-control" type="select">
          <option> Selecciona la clase de tu guardian </option>
          <option value="hunter"> Hunter </option>
          <option value="titan"> Titan </option>
          <option value="warlock"> Warlock </option>
        </select>
        </div>
        
        <h2>Seleccione tu raza</h2>
        <select onChange ={this.handleSelect} name = "raza" className = "form-control" type="select">
        <option> Selecciona la raza de tu guardian </option>
          <option value="human"> Human </option>
          <option value="exo"> Exo </option>
          <option value="woken"> Woken </option>
        </select>

        <h2>Seleccione genero</h2>
        <select onChange ={this.handleSelect} name = "genero" className = "form-control" type="select">
          <option> Selecciona genero de tu guardian </option>
          <option value="Male"> M </option>
          <option value="Female"> F </option>
        </select>
        
        <h2>Seleccione tu clase/habilidad</h2>
        <select onChange ={this.handleSelect} name = "claseHabilidad" className = "form-control" type="select">
          <option> Selecciona la clase de tu guardian </option>
          <option value="void"> Void </option>
          <option value="solar"> Solar </option>
          <option value="arc"> Arc </option>
          <option value="stasis"> Stasis </option>
        </select>

        <h2>Tu nombre</h2>
        <input onChange={this.handleInput} name = "nombrePersonaje" className = "form-control" type="text" />
        
        <h2>Escribe tu gamerTag</h2>
        <input onChange={this.handleInput} name = "gamerTag" className = "form-control" type="text" />

        <button className="btn btn-primary" type="submit"> Guardar Registro </button>

      </form>
    </div>
  
  )

  }
}


export default App;
