import ButtonComponent from "./ButtonComponent"

const ImageComponent = props => {
   return <div>
    <img src={props.src} alt={props.alt} />
    <ButtonComponent btnTxt="SUBMIT" ClassName="btn"/>
    </div>
};

export default ImageComponent;