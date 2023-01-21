import { ColorRing } from "react-loader-spinner";
const LoadingScreen = () => {
  return (
    <div style={{ paddingTop: "40px" }}>
      <ColorRing
        visible={true}
        height="40"
        width="40"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};
export default LoadingScreen;
