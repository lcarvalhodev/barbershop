import React, { useState, useContext } from 'react';
import { Form, Input, Button, ErrorMessage } from '../components/common'
import { FirebaseContext } from '../components/Firebase'

const Register = () => {

    const [formValues, setFormValues] = useState({ email: '', password: '', confirmPassword: '', userName: '', fone: '' });
    const { firebase } = useContext(FirebaseContext);
    const [errorMessage, setErrorMessage] = useState('');

    function handleInputChange(e) {
        e.persist();
        setErrorMessage('');
        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formValues.password === formValues.confirmPassword) {
            firebase.register({
                userName: formValues.userName,
                fone: formValues.fone,
                email: formValues.email,
                password: formValues.password
            }).catch(error => {
                setErrorMessage('Não foi posssível concluir o cadastro, utilize um email não cadastrado e uma senha com mais de 6 dígitos.');
            })
        }
        else {
            setErrorMessage('Senha e confirmação devem ser iguais.')
        }
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Input onChange={handleInputChange} value={formValues.userName} placeholder="userName" type="text" required name="userName" />
            <Input onChange={handleInputChange} value={formValues.email} placeholder="email" type="email" required name="email" />
            <Input onChange={handleInputChange} value={formValues.fone} placeholder="fone" type="text" required minLength={9} name="fone" />
            <Input onChange={handleInputChange} value={formValues.password} placeholder="password" type="password" required minLength={6} name="password" />
            <Input onChange={handleInputChange} value={formValues.confirmPassword} placeholder="confirm password" type="password" required minLength={6} name="confirmPassword" />
            {!!errorMessage &&
                <ErrorMessage>
                    {errorMessage}
                </ErrorMessage>
            }
            <Button type="submit" block>
                Register
            </Button>
        </Form>
    )
}

export default Register;