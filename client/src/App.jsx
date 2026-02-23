import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState('')
  const [submittedWord, setSubmittedWord] = useState('')
  const [isValid, setIsValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmittedWord(word)

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    setIsValid(response.ok)

    setIsLoading(false)
    setWord('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Rosema, say something..."
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {!isLoading && submittedWord && (
        <p>{submittedWord} is {isValid ? '✅ a valid word' : '❌ not a valid word'}</p>
      )}
      {submittedWord && <p>You submitted: {submittedWord}</p>}
    </>
  )
}

export default App
