import { use, useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [submittedWord, setSubmittedWord] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedWord(word)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word..."
        />
        <button type="submit">Submit</button>
      </form>
      {submittedWord && <p>You submitted: {submittedWord}</p>}
    </>
  )
}

export default App
