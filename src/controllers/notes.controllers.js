const noteControl = {};

noteControl.getNotes = (req, res) => res.json ({
  message: []
})

noteControl.getNote = (req, res) => res.json({
  title: 'Hello',
  message: 'Note'
})

noteControl.createNote = (req, res) => res.json({
  message: 'Note saved'
})

noteControl.updateNote = (req, res) => res.json({
  message: 'Note update'
})

noteControl.deleteNote = (req, res) => res.json({
  message: 'Note delete'
})


module.exports = noteControl;
