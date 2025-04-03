import { useState, useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { dataURLtoFile } from '../helpers/dataUrltoFile';

const useWebcamCapture = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageFile = dataURLtoFile(imageSrc, 'captured_check.jpg');
    setImage(imageSrc);
    setFile(imageFile);
  }, [webcamRef, setImage, setFile]);

  const retake = () => setImage(null);
  const enlarge = () => setIsEnlarged(!isEnlarged);
  const imageStyle = {
    width: isEnlarged ? '90%' : '150px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'width 0.3s ease',
    maxWidth: '100%',
  };

  const WebcamComponent = () => (
    <>
      {!image ? (
        <div className='flex flex-col items-center'>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat='image/jpeg'
            videoConstraints={{ facingMode: 'environment' }}
          />

          <div className='text-sm mt-2 font-bold text-gray-700'>
            Ensure the check is well-lit and in focus.
          </div>
          <button
            type='button'
            className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 cursor-pointer '
            onClick={capture}
          >
            Capture Photo
          </button>
        </div>
      ) : (
        <div className='flex flex-col items-center flex-grow'>
          <img
            src={image}
            alt='Captured'
            style={imageStyle}
            onClick={enlarge}
          />
          <div className='text-sm mt-2 font-bold text-gray-700'>
            Click the photo to enlarge it or return to the original size.
          </div>

          <button
            type='button'
            className='bg-yellow-700 text-white px-4 py-2 rounded-md mt-4 cursor-pointer'
            onClick={retake}
          >
            Retake Photo
          </button>
        </div>
      )}
    </>
  );

  return { image, file, WebcamComponent };
};

export default useWebcamCapture;
