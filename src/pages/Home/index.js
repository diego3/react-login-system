import { useEffect, useState } from "react"
import "../../App.css";
import { loadUserById } from "../../services/firebase"

const Home = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [birthdate, setBirthdate] = useState()

    useEffect(() => {
        const loggedId = localStorage.getItem('loggedId')
        loadUserById(loggedId)
        .then(resp => {
            const doc = resp.data()
            setFirstName(doc.firstName)
            setLastName(doc.lastName)
            setBirthdate(doc.birthdate)
        })
    }, [])

    return (
        <>
            <header className="header">
                <div className="container">
                    <h3>Bem vindo(a)</h3>
                    <span><span className="name-tag">nome:</span> {firstName}</span>
                    <span><span className="name-tag">sobrenome:</span> {lastName}</span>
                    <span><span className="name-tag">data de nascimento:</span> {birthdate}</span>
                    <a className="link" onClick={(e) => {
                        e.stopPropagation()
                        window.location = '/'
                    }}>Ir para página de login</a>
                </div>
                
            </header>
        </>
    )
}

export default Home