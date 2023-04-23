import { useState } from 'react'
import '../../App.css'
import { createAuth, createUser } from '../../services/firebase'

const Signup = () => {
    const [payload, setPayload] = useState()
    const [error, setError] = useState()

    function handleInput(e) {
        setPayload(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function handleOnFocus() {
        setError('')
    }

    async function handleFormSubmit() {
        let userId = ''
        try {
            const resp = await createAuth(payload.email, payload.password)
            userId = resp.user.uid
        } catch(err) {
            setError('auth error: ' + err.message)
            return
        }

        if (userId === '') {
            setError('auth error: user not created')
        }

        try {
            await createUser({
                firstName: payload.firstName,
                lastName: payload.lastName,
                birthdate: payload.birthdate,
            }, userId)
        } catch (err) {
            setError('createUser error: '+ err.message)
        }

        window.location = "/?p=signup-success"
    }

    return (
        <>
            <div className='app'>
                <header className="header">
                <div className="container">
                    <p className='typing-cadastre-se'>Cadastre-se</p>
                    <input type="text" placeholder='Digite seu nome' name="firstName" onChange={handleInput} onFocus={handleOnFocus}></input>
                    <input type="text" placeholder='Digite seu sobrenome' name="lastName" onChange={handleInput} onFocus={handleOnFocus}></input>
                    <input type="text" placeholder='Digite seu melhor email' name="email" onChange={handleInput} onFocus={handleOnFocus}></input>
                    <input type="text" placeholder='Digite sua senha' name="password" onChange={handleInput} onFocus={handleOnFocus}></input>
                    <input type="text" placeholder='Digite sua data de nascimento dd/MM/YYYY' name="birthdate" onChange={handleInput} onFocus={handleOnFocus}></input>
                    <button
                        className="button"
                        onClick={(e) => handleFormSubmit(e)}
                    >
                        Cadastrar
                    </button>
                    <p className='error-message'>
                        <span title="message"></span>{error}
                    </p>
                    <a className="link" onClick={(e) => {
                        e.stopPropagation()
                        window.location = '/'
                    }}>Ir para página de login</a>
                </div>
                </header>
            </div>
        </>
    )
}

export default Signup