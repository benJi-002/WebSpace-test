import SlideTitle from "./SlideTitle";


export default function Slide({ data: { title, text, bigNumber, bigText } }) {
    return (
        <div className="slide">
            <SlideTitle 
                title={title} 
                text={text} 
                bigNumber={bigNumber} 
                bigText={bigText} 
            />
        </div>
    );
}