const path = require('path')
const fs = require('fs')
const express = require('express')

const app = express()
const filePath = path.join(__dirname, '../mock/user.json')

app.get('/users/detail', (req, res) => {
  const id = parseInt(req.query.userId, 10)
  if (isNaN(id) || id < 0 || id > 1000) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return res.status(500).json({ error: 'Failed to read data file' })
    }

    try {
      const users = JSON.parse(data)
      const user = users.find((user) => user.id === id)
      if (!user) {
        return res.json(null)
      }

      res.json({
        email: user.email,
        gender: user.gender,
      })
      console.log('user detail')
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError)
      return res.status(500).json({ error: 'Failed to parse data file' })
    }
  })
})

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  if (isNaN(id) || id < 0 || id > 1000) {
    return res.status(400).json({ error: 'Invalid user ID' })
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return res.status(500).json({ error: 'Failed to read data file' })
    }

    try {
      const users = JSON.parse(data)
      const user = users.find((user) => user.id === id)
      if (!user) {
        return res.json(null)
      }

      res.json({
        id: user.id,
        name: user.name,
      })
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError)
      return res.status(500).json({ error: 'Failed to parse data file' })
    }
  })
})

module.exports = { path: '/api', handler: app }
