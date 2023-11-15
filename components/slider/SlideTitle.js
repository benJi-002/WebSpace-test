export default function SlideTitle({ title, text, bigNumber, bigText }) {

    return (
        <div className="slide-wrapper">
            <div className="slide-bigNumber">{bigNumber}</div>
            <div>
                <div className="slide-title">{title}</div>
                <div className="slide-text">{text}</div>
            </div>
            <div className="slide-bigText">{bigText}</div>
        </div>
    );
};