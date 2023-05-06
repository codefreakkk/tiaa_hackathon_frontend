import React from 'react'

function MovieDetails() {
  return (
    <>
        {/* Movie details */}
        <div className="wm_header mt-4 mb-4">
          <div className="wm_stick"></div>
          <div className="wm_title">Details</div>
        </div>

        <div className="md_title" style={{ color: "black" }}>
          <hr className="gray" />
          Release Date <span className="name">17-2-2022</span>
          <hr className="gray" />
        </div>

        <div className="md_title" style={{ color: "black" }}>
          Duration <span className="name">2.5 Hours</span>
          <hr className="gray" />
        </div>

        <div className="md_title" style={{ color: "black" }}>
          Awards <span className="name">Grammy</span>
          <hr className="gray" />
        </div>
        <div className="md_title" style={{ color: "black" }}>
          Genere <span className="name">Action</span>
          <hr className="gray" />
        </div>

    </>
  )
}

export default MovieDetails