import {useState} from 'react'
import { Link } from 'react-router-dom'
// import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import Button from '@mui/material/Button';


function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const {setTimeActive} = useAuthValue()
    const navigate = useNavigate()

    const login = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if(!auth.currentUser.emailVerified) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            setTimeActive(true)
                            navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                }else{
                    navigate('/')
                }
            })
            .catch(err => setError(err.message))
    }

    return(
        <div className='center'>
            <div className='auth'>
                <h2>Log in</h2>
                {error && <div className='auth__error'>{error}</div>}
                <form onSubmit={login} name='login_form'>
                    <input
                        type='email'
                        value={email}
                        required
                        placeholder="Enter your email"
                        onChange={e => setEmail(e.target.value)}/>
                    <input
                        type='password'
                        value={password}
                        required
                        placeholder='Enter your password'
                        onChange={e => setPassword(e.target.value)}/>

                    <Button type='submit'>LOGIN</Button>
                </form>
                <p>
                    Don't have and account? &nbsp;
                    <Link to='/register' style={{ color: '#d97ca5', textDecoration: 'none', fontWeight: 'bold' }}>Create one here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
