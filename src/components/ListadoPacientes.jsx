import React from 'react'
import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  return (
    <div className="md:w-1/2 lg:w-2/5 mt-2 p-2 rounded-md shadow-md bg-indigo-900 md:overflow-y-scroll">
      <div>
        <h2 className="font-black text-center text-xl mt-4 text-white">Listado Pacientes</h2>
        <p className="mt-4 font-bold text-center text-white">
          Administra tus {""}
          <span className="text-indigo-300">pacientes y citas.</span>
        </p>
      </div>

      { pacientes.length === 0 ?
          (
            <div className="bg-white shadow-md rounded-lg p-4 m-8">
              No hay pacientes registrados.
            </div>
            ) :
            (
            pacientes.map( (paciente) => {
              return (
                  <Paciente
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                  />
              )
            })
          )
      }

    </div>
  )
}

export default ListadoPacientes