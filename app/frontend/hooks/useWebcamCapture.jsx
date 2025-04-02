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
    width: isEnlarged ? '80%' : '150px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'width 0.3s ease',
    maxWidth: '80%',
  };

  const WebcamComponent = () => (
    <>
      {!image ? (
        <>
          <Webcam audio={false} ref={webcamRef} screenshotFormat='image/jpeg' />
          <button onClick={capture}>Capture Photo</button>
        </>
      ) : (
        <>
          <img
            src={image}
            alt='Captured'
            style={imageStyle}
            onClick={enlarge}
          />
          <button onClick={retake}>Retake Photo</button>
        </>
      )}
    </>
  );

  return { image, file, WebcamComponent };
};

export default useWebcamCapture;
