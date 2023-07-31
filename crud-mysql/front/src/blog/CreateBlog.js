import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI ='http://localhost:8000/blogs/'

export const CompCreateBlog = (() => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    // guardo
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI,{title, content})
        navigate('/')
    }
    return (
        <section className='w-50 mx-auto'>
            <h1>Crear nuevo post</h1>
            <form action="" onSubmit={store}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Título</label>
                        <input
                            type="text" 
                            onChange={ (e) => setTitle(e.target.value) }
                            name="title" 
                            id="title" 
                            className='form-control' 
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="form-label">Contenido</label>
                        <textarea 
                            name="content" 
                            id="content" 
                            onChange={ (e) => setContent(e.target.value) }
                            className='form-control'
                        >
                        </textarea>

                    </div>
                    <button type="submit" className='my-5 btn btn-primary'>Guardar</button>
            </form>
        </section>
    )
})