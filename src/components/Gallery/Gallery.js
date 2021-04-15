import React, { useState, useCallback } from "react";
import './Gallery.css';
import ImageViewer from "react-simple-image-viewer";
import {images,images2} from './Images';



const Gallery = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

  
    const openImageViewer = useCallback(index => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
    return (
        <div className='gallery'>
            <h1>What kind of Coffee we serve for you</h1>
            <div className='all-gallery'>
                <div className='left-gallery'>
              
                        {images.map((src, index) => (
                          <div className='img-box'  onClick={() => openImageViewer(index)}
                        
                          key={index}>
                            <img
                            src={src}
                           
                            alt=""
                            />
                         </div>
                    ))}
               
                </div>
               
            </div>
             

            {isViewerOpen && (
                <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                backgroundStyle={{
                    backgroundColor: "rgba(0,0,0,0.7)"
                  }}
                />
            )}
                
        </div>
    );
}

export default Gallery;
