import React, { useState } from 'react'
import TabelaAtividades from '../../tabelas/TabelaAtividades'
import AddAtividadeForm from '../../forms/AddAtividade'

const Main = () => {

  const atividadeData = []
  // eslint-disable-next-line
  const [atividades, setAtividades] = useState(atividadeData)

  return (
    <div className="container">
      <h2>Registro de Atividades</h2>
      <div>
        <div>
          <h3>Adicionar Atividade</h3>
          <AddAtividadeForm />
        </div><br/>
        <div>
          <h3>Lista de Atividades</h3>
          <TabelaAtividades atividades={atividades} />
        </div>
      </div>
    </div>
  )
}

export default Main