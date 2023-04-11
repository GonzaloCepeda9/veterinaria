import React, { useEffect } from 'react';
import { useState } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(()=> {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  function generarId () {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return (
      random + fecha
    )
  }

  function handleSubmit (e) {
    e.preventDefault();

    // Validación del formulario

    if ([ nombre, propietario, email, fecha, sintomas ].includes("")) {
      setError(true);
      return;
    }
    setError(false)

    // Crear nuevo paciente, y agregarlo al arreglo
    
    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }


    if (paciente.id) {
      nuevoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map ( pacienteState => pacienteState.id === paciente.id ? nuevoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      nuevoPaciente.id = generarId();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    // Reiniciar formulario

    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")

  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mt-2 p-2 rounded-md shadow-md bg-indigo-900">
      <div>
        <h2 className="font-black text-center text-xl mt-4 text-white">Formulario</h2>
        <p className="mt-4 font-bold text-center text-white">
          Añade pacientes y {""}
          <span className="text-indigo-400">adminístralos</span>
        </p>
      </div>
      <form
        action=""
        className="bg-white shadow-md rounded-lg p-6 m-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="mascota" className="block text-gray-700 uppercase text-xs font-bold">Nombre mascota</label>
          <input
            id="mascota"
            type="text"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            placeholder="Nombre de la mascota"
            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded outline-blue-900" />
        </div>
        <div className="mb-4">
          <label htmlFor="propietario" className="block text-gray-700 uppercase text-xs font-bold">Propietario</label>
          <input
            id="propietario"
            type="text"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
            placeholder="Nombre del propietario"
            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded outline-blue-900" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 uppercase text-xs font-bold">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Email de contacto"
            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded outline-blue-900" />
        </div>
        <div className="mb-4">
          <label htmlFor="alta" className="block text-gray-700 uppercase text-xs font-bold">Fecha de alta</label>
          <input
            id="alta"
            type="date"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded outline-blue-900" />
        </div>
        <div className="mb-4">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase text-xs font-bold">Síntomas</label>
          <textarea
            id="sintomas"
            type="date"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value) }
            placeholder="Describe los síntomas"
            className="text-xs border-2 w-full p-2 mt-2 placeholder-gray-400 rounded outline-blue-900" />
        </div>
        <input type="submit" className="bg-indigo-600 text-white p-1 w-full text-xs font-bold hover:bg-indigo-500 active:bg-indigo-700 cursor-pointer rounded-md uppercase" value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
        { error &&
        <Error>
          <p>Todos los campos son obligatorios.</p>
        </Error>}
      </form>
    </div>
  )
}

export default Formulario