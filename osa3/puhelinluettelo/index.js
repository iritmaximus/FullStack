const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: 040-123456
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-643122"
  }
]

app.get("/api/notes", (req, res) => {
  res.json(notes)
})

app.get('/info', (req, res) => {
  res.send(
    `<div>Phonebook has info for ${notes.length} people</div>
    </br>
    <div>${new Date()}</div>`
  )
})

app.get('api/notes/:id', (res, req) => {
  const id = Number(req.params.id)
  const note = notes.find(note => {
    console.log(note.id, typeof note.id, typeof id, note.id === id)
    return note.id === id
  })
  console.log('Note:'. note)
  res.json(note)
})

const port = 3001
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})