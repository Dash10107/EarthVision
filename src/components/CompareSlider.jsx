import {
    ReactCompareSlider,
    ReactCompareSliderImage,
  } from "react-compare-slider";
  
  export default function CompareSlider() {
    return (
    //   <div style={{ width: "100%", height: "100%", flexGrow: 1 }}>
      <div className="w-full flex-grow">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="https://media.cnn.com/api/v1/images/stellar/prod/170522202550-02-versova-beach.jpg?q=w_2560,h_1429,x_0,y_0,c_fill"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://media.istockphoto.com/id/878335856/photo/chowpatty-beach-mumbai-india.jpg?s=612x612&w=0&k=20&c=aGdFsG50z6dqe6MDSRBXQMLliKhqP6ofYnHyt0K4a7Q="
              alt="Image two"
              style={{
                backgroundColor: "white",
                backgroundImage: `
              linear-gradient(45deg, #ccc 25%, transparent 25%),
              linear-gradient(-45deg, #ccc 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ccc 75%),
              linear-gradient(-45deg, transparent 75%, #ccc 75%)`,
                backgroundSize: `20px 20px`,
                backgroundPosition: `0 0, 0 10px, 10px -10px, -10px 0px`,
              }}
            />
          }
          style={{ width: "100%", height: "50%" }}
        />
      </div>
    );
}
  