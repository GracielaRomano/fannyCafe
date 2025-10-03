import React from 'react'
import './Video.css'

const Video = () => {
  return (
    <div>
        <section data-bs-version="5.1" className="header18 cid-uXQ7jkdsIQ mbr-fullscreen" id="video-5-uXQ7jkdsIQ">
            <div className="mbr-background-video-preview" style={{display: 'block', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundImage: 'url("https://img.youtube.com/vi/6lkmWP4rngg/maxresdefault.jpg")'}}>
            </div>
            <div className="mbr-video-container" style={{overflow: 'hidden', position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px'}}>
                <div className="mbr-video-foreground" style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden'}}>
                <video
            className="mbr-background-video"
            autoPlay
            loop
            muted
            playsInline
            style={{
              marginTop: '0px',
              maxWidth: 'initial',
              transitionProperty: 'opacity',
              transitionDuration: '1000ms',
              pointerEvents: 'none',
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.2)'
            }}
          >
            <source src="/src/assets/videos/article2.mp4" type="video/mp4" />
          </video>
                </div>
            </div>
            <div className="mbr-overlay" style={{opacity: '0.3', backgroundColor: 'rgb(0, 0, 0)'}}>
            </div>
            <div className="container-video">
                <div className="row">
                </div>
            </div>
        </section>
    </div>
  )
}
export default Video
