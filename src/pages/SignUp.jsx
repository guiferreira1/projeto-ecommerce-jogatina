import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Header from "../components/Header";
import Footer from '../components/Footer';

function SignUp() {

    const [formData, setFormData] = useState({
        cep: '',
        rua: '',
        cidade: '',
        estado: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const fetchAddress = async (cep) => {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.data.erro) {
            setFormData({
              ...formData,
              rua: response.data.logradouro || '',
              cidade: response.data.localidade || '',
              estado: response.data.uf || ''
            });
          } else {
            alert('CEP inválido ou não encontrado.');
          }
        } catch (error) {
          console.error('Erro ao buscar o CEP:', error);
          alert('Erro ao buscar o CEP.');
        }
      };
    
      const handleBlur = () => {
        if (formData.cep.length === 8) {
          fetchAddress(formData.cep);
        } else {
          alert('Digite um CEP válido com 8 dígitos.');
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
      };

    return(
        <>
            <Header />
            <div className="s-cadastro">
                <h2>Cadastre-se</h2>
                <div className="container">
                    <Form onSubmit={handleSubmit} data-bs-theme='dark' className='form'>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="formCEP">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            name="nome"
                            placeholder='Digite o seu nome'
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="formCEP">
                        <Form.Label>Sobrenome</Form.Label>
                        <Form.Control
                            type="text"
                            name="sobrenome"
                            placeholder='Digite seu sobrenome'
                            onChange={handleChange}
                        />

                        <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formCEP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Digite o CEP"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                        </Form.Group>
                    </Row>
                    
                    <Row className="mb-3">
                        <Form.Group as={Col} md="3" controlId="formCEP">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Rua"
                            name="rua"
                            value={formData.rua}
                            onChange={handleChange}
                            disabled
                        />
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="formCEP">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cidade"
                            name="cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            disabled
                        />
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="formCEP">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Estado"
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            disabled
                        />
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="formCEP">
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Número"
                            name="numero"
                            onChange={handleChange}
                        />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        name="terms"
                        label="Concordo com os termos e condições"
                        onChange={handleChange}
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" className='botao-submit'>Cadastrar</Button>
                    </Form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;