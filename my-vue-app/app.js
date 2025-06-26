import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const pool = mysql.createPool({
  host: '10.100.84.47',
  user: 'chonnavee',
  password: 'roligen555',
  database: 'vproject',
})

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body
  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    if (rows.length === 0) {
      return res.json({ success: false, message: 'User not found' })
    }
    const user = rows[0]
    if (user.password === password) {
      return res.json({ success: true, token: 'fake-jwt-token' })
    } else {
      return res.json({ success: false, message: 'Incorrect password' })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
})

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000')
})
