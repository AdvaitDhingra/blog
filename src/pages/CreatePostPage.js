import fire from '../components/Firebase'
import React, { useEffect, useState } from 'react'

export default function CreatePostPage() {

    const [user, setUser] = useState({})
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const post = () => {
        fire.firestore().collection("posts").add({
            title: title,
            content: content,
            date: new Date(),
        }).then(() => {
            console.log('Post added')
        }).catch(error => {
            console.log(error)
        })
    }

    const login = () => {
        fire.auth().signInWithEmailAndPassword(email, password).then({}).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        })
        console.log(user)
    }, [])
    return(
        <div>
            {user ? (<div style = {{padding: "20px 20px"}}>
                <div>
                <h1>Create a Post</h1>
                    <input type = "text" placeholder = "Title" onChange = {e => setTitle(e.target.value)}/>
                    <input type = "text" placeholder = "Content" onChange = {e => setContent(e.target.value)}/>
                    <button onClick = {post}>Sumbit</button>
                    </div>
            </div>) : (<div style = {{padding: "20px 20px"}}>
                <h1>Please login</h1>
                <input type = "email" placeholder = "email" onChange = {(e) => setEmail(e.target.value)} />
                <input type = "password" placeholder = "password" onChange = {(e) => setPassword(e.target.value)} />
                <button onClick = {login}>Login</button>
            </div>)}
        </div>
    )
}