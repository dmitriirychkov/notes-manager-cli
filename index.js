const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { addNote, getNotes } = require('./notes.controller')

yargs(hideBin(process.argv))
    .command({
        command: 'add',
        describe: 'Add new note to list',
        builder: {
            title: {
                type: 'string',
                describe: 'Note title',
                demandOption: true,
            }
        },
        handler: ({ title }) => {
            addNote(title)
        }
    })
    .command({
        command: 'list',
        describe: 'Print all notes',
        handler: () => {
            const notes = getNotes()
            console.log(notes)
        }
    })
    .parse()