import React, { Component } from 'react';
import api from '../api'
import { Table, Button } from 'reactstrap';

class TabelaAtividades extends Component{

  state = {
    atividades: []
  }
  async componentDidMount (){
    const response = await api.get('/atividade')

    this.setState({atividades: response.data})
  }

  render(){
    const {atividades} = this.state

    return (
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo de Atividade</th>
            <th>Prioridade</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
        {atividades.map(atv => (
           <tr key={atv._id}>
              <td>{atv.nome}</td>
              <td>{atv.tipodeatividade}</td>
              <td>{atv.prioridade}</td>
              <td>{atv.data}</td>
              <td>{atv.descricao}</td>
              <Button outline color="primary" size="sm" >Editar</Button>{' '}
              <Button outline color="danger" size="sm"  >Apagar</Button>
          </tr>
        ))}
        </tbody>
      </Table>
    )
  }
}

export default TabelaAtividades;