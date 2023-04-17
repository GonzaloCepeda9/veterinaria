import React from 'react'

function Paciente({ paciente, setPaciente, eliminarPaciente }) {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  function handleDelete () {
    const respuesta = confirm("¿Seguro deseas eliminar este paciente?")

    if (respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-8">
      <p className="block text-gray-700 uppercase text-[16px] font-bold mb-4">Nombre: {""}
        <span className="normal-case text-[16px]late-500">{nombre}</span>
      </p>
      <p className="block text-gray-700 uppercase text-[16px] font-bold mb-4">Propietario: {""}
        <span className="normal-case text-[16px]late-500">{propietario}</span>
      </p>
      <p className="block text-gray-700 uppercase text-[16px] font-bold mb-4">Email: {""}
        <span className="normal-case text-[16px]late-500">{email}</span>
      </p>
      <p className="block text-gray-700 uppercase text-[16px] font-bold mb-4">Fecha de alta: {""}
        <span className="normal-case text-[16px]late-500">{fecha}</span>
      </p>
      <p className="block text-gray-700 uppercase text-[16px] font-bold">Síntomas: {""}
        <span className="normal-case text-[16px]late-500">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-4 md:flex-col xl:flex-row md:gap-2">
        <button
          type="button"
          className="text-[16px] py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=> setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="text-[16px] py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente