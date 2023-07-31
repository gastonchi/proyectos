import { BlogModel } from "../models/BlogModel.js";

//// Métodos para el CRUD

// Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error })
    }
}

// Mostrar un registro
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where:{ id: req.params.id }
        })
        res.json(blog[0])
        
    } catch (error) {
        res.json({ message: error })
    }
}

// Crear registro
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json('Creado')
    } catch (error) {
        res.json({ message: error })
    }
}

// Actualizar registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body,{
            where: { id: req.params.id}
        })
        res.json({
            "message": "Registro actualizado"
        })
    } catch (error) {
        res.json({ message: error })
    }
}

// Eliminar registro
export const deleteBlog = async  (req, res) => {
    await BlogModel.destroy({
        where: { id : req.params.id }
    })
    res.json('Registro eliminado')
}