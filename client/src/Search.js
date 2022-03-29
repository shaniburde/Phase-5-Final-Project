import React from 'react'

export default function Search({ searchTerm, setSearchTerm}) {
  return (
      <div className="search-container">
        <input
        className="search-bar"
        type="text"
        placeholder="search . . ."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

  )
}
