const fs = require('fs/promises')
const path = require('path')

const notesPath = path.join(__dirname, 'db.json')
console.log(notesPath)

function addNote(title) {
    const notes = require('./db.json')
    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note)

    fs.writeFile(notesPath, JSON.stringify(notes))
}

function getNotes() {
    return require('./db.json')
}

module.exports = {
    addNote,
    getNotes
}
