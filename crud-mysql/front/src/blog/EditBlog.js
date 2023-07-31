import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const URI ='http://localhost:8000/blogs/'

export const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, { title, content })
        navigate('/')
    }
    
    useEffect ( () => {
        getBlogById()
    }, [] )
    
    const getBlogById = async () => {
        const res = await axios.get(URI+id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }


    return (
        <section className='col-md-6 col-xs-12 mx-auto p-3 '>
            <h1>Editar contenido post # {id}</h1>
            <form onSubmit={update}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Título</label>
                        <input
                            type="text" 
                            onChange={ (e) => setTitle(e.target.value) }
                            name="title" 
                            id="title" 
                            className='form-control' 
                            value={title}
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="form-label">Contenido</label>
                        <textarea 
                            name="content" 
                            id="content" 
                            onChange={ (e) => setContent(e.target.value) }
                            className='form-control'
                            value={content}
                        >
                        </textarea>

                    </div>
                    <button type="submit" className='my-5 btn btn-primary'>Editar</button>
            </form>
        </section>
    )
}