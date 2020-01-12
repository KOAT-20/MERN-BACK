const noteControl = {};
const noteModel = require('../models/notes.models.js');

noteControl.getNotes = async (req, res) => {
  const notes = await noteModel.find();
  res.json (notes);
}

noteControl.getNote = async (req, res) => {
  const note = await noteModel.findById(req.params.id);
  res.json (note)
}

noteControl.createNote = async (req, res) => {
  const { title, description, date, author } = req.body;
  const newNote = new noteModel({
    title,
    description,
    date,
    author
  })
  await newNote.save();
  res.json({message: 'Nota creada exitosamente!'})
}

noteControl.updateNote = async (req, res) => {
  const { title, description, author } = req.body;

  await noteModel.findOneAndUpdate({_id: req.params.id}, {
    title,
    description,
    author
  });
  res.json({message: 'Nota actualizada exitosamente!'})
}

noteControl.deleteNote = async (req, res) => {
  await noteModel.findOneAndDelete(req.params.id);
  res.json({message: 'Nota eliminada!'})
}


module.exports = noteControl;
