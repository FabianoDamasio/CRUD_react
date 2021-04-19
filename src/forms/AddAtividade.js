import React from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';

const AddAtividadeForm = (props) => {
  return (
    <Form>
      <Row form>
        <Col md={3}>
          <FormGroup>
            <Label for="nome">Nome:</Label>
            <Input type="text" name="nome" id="nome" placeholder="Nome" required maxLength='25'/>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="tipodeatividade">Tipo de Atividade:</Label>
            <Input type="select" name="tipodeatividade" id="tipodeatividade" required>
              <option selected disabled value=''>Selcione</option>
              <option>Manutenção</option>
              <option>Desenvolvimento</option>
              <option>Documentação</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup tag="fieldset">
              <Label>Prioridade:</Label>
            <Row form md={2}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" checked />{'Normal'}
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{'Urgente'}
                </Label>
              </FormGroup>
            </Row>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="data">Data:</Label>
            <Input type="date" name="data" id="nome" required />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="descricao">Descrição:</Label>
        <Input type="textarea" name="descricao" id="descricao" maxLength='120' placeholder="Descreva a Atividade"/>
      </FormGroup>
      <Button>Salvar</Button>
    </Form>
  );
}

/*<FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio1" disabled />{' '}
                Option three is disabled
              </Label>
            </FormGroup>*/

export default AddAtividadeForm