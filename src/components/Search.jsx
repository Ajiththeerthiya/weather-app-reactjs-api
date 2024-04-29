import React from 'react'

const Search = ({ search, setSearch, handelSearch }) => {
    return (
        <>
            <div className="container">
                <div className="input-search">
                    <input
                        type="text"
                        placeholder="Enter City Name"
                        name="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <button className="btn btn-dark" onClick={handelSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default Search