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
                    <iframe 
                        className="mbr-background-video" 
                        id="ytplayer-489046" 
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
                            transform: 'scale(1.2)'
                        }} 
                        frameBorder="0" 
                        allowFullScreen={true}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        title="Teofilo Coffee welcome to our home"
                        src="https://www.youtube.com/embed/6lkmWP4rngg?autoplay=1&loop=1&playlist=6lkmWP4rngg&t=20&mute=1&playsinline=1&controls=0&showinfo=0&autohide=1&allowfullscreen=true&mode=transparent"
                    />
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
