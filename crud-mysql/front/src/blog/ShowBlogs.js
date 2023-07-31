import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs'

export const CompShowBlogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect ( () => {
        getBlogs()
    }, [])
    
    // mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlogs(res.data)        
    }

    const deleteBlog = async ( id ) => {
        await axios.delete(`${URI}/${id}`)
        getBlogs()        
    }

    return (
        <section className='container'>
            <header className="row mx-auto my-5">
                <div className="col text-center" >
                    <Link to={'/create'} className='btn btn-success'> 
                        Crear nuevo post <i className='fa fa-plus fa-xs'></i>
                    </Link>
                </div>
            </header>
            <div className="row">
                <div className="col">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { blogs.map( blog => (
                            <tr key={blog.id}>
                                <td>{ blog.title }</td>
                                <td>{ blog.content }</td>
                                <td>
                                    <Link to={`/edit/${blog.id}`} className='btn btn-warning' > 
                                        <i className='fa fa-pencil '></i>
                                    </Link>
                                    <button 
                                        onClick={ ()=>deleteBlog(blog.id) } 
                                        className='btn btn-danger mx-2'>
                                        <i className='fa fa-trash'></i>
                                    </button>
                                </td>

                            </tr>
                        ))}                       
                    </tbody>
                </table>

                </div>
            </div>
        </section>
    )

}
