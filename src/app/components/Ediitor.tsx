import { useState } from "react";

const ImageEditor: React.FC = () => {
  const [imageData, setImageData] = useState<string | null>();
  const [defaultImage, setdeFaultImage] = useState<string | null>();
  const [brightness, setBrightness] = useState<number>(0);
  const [imagePath, setImagePath] = useState<string | null>();
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  return (
    <div>
      <div>
        <button>Import Image</button>
        <button>Blur</button>
        <button>Gray Scale</button>
        <button>Apply Brightness</button>
        <button>Flip Image</button>
        <button>Reset</button>

        {isProcessing && <div>Processing...</div>}
        {imageData && (
          <>
            <div>
              <img
                src={imageData}
                alt="Selected"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "*px",
                }}
              ></img>


            </div>

            <div style={
              {
                marginTop:'20px'
              }
            }>
              <label style={{fontSize:'16px',color:'#333'}}> Brightness: <input type="range" 
              min="0" 
              max="100"
               value={brightness} 
               onChange={}
              style={{marginLeft:'10px',
                width:'200px'
              }}/></label>

            </div>
          </>
        )}
      </div>
    </div>
  );
};


const buttonStyle={
  magin:'5px',
  padding:'10px 15px',
  fontsize:'14px',
  color:'#fff',
  backgroundColor:'#007BFF',
  border:'none',
  borderRadius:'5px',
  cursor:'pointer',
  transition:'background-color 0.3s'
};


const getButtonStyle={
  
}