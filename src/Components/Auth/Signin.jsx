import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../Firebase/firebase.config'
import { AuthContext } from '../../App';

const Signin = () => {
    const [user, setUser] = useContext(AuthContext)
    const provider = new GoogleAuthProvider();

    const handleSigninWithGoogle = () => {
        signInWithPopup(auth, provider).then(res => {
            const data = {
                name: res.user.displayName,
                email: res.user.email,
                photo: res.user.photoURL
            }
            setUser(data)

        }).catch(err => {
            console.log("eer", err);

        })
    }
    return (
        <div>
            <button onClick={handleSigninWithGoogle} className=''>Login in With Google</button>
        </div>
    )
}

export default Signin