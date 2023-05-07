import React from 'react'

function MovieDetails({release_date, duration, awards, genere}) {
  return (
    <>
        {/* Movie details */}
        <div className="wm_header mt-4 mb-4">
          <div className="wm_stick"></div>
          <div className="wm_title">Details</div>
        </div>

        <div className="md_title" style={{ color: "black" }}>
          <hr className="gray" />
          Release Date <span className="name">{release_date}</span>
          <hr className="gray" />
        </div>

        <div className="md_title" style={{ color: "black" }}>
          Duration <span className="name">{duration}</span>
          <hr className="gray" />
        </div>

        <div className="md_title" style={{ color: "black" }}>
          Awards <span className="name">{awards}</span>
          <hr className="gray" />
        </div>
        <div className="md_title" style={{ color: "black" }}>
          Genere <span className="name">{genere}</span>
          <hr className="gray" />
        </div>

    </>
  )
}

export default MovieDetails