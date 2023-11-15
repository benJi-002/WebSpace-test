import { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";

import Dots from "./Controls/Dots";

import SlidesList from "./SlideList";

export const SliderContext = createContext();

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {

    const items = [
        {
            title: 'Оценка дизайнеру:',
            text: 'Не заслужил,  там криво, там непонятно',
            bigNumber: 3,
            bigText: 'и не более'
        },
        {
            title: 'Сложность задания',
            text: 'Миссия с вертолетиком была легче..',
            bigNumber: 5,
            bigText: 'звезд'
        },
        {
            title: 'Потребовалось на тестовое задание:',
            text: 'Справился быстро, забыл пообедать',
            bigNumber: 9,
            bigText: 'часов'
        },
    ];
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);

    return (
        <SliderContext.Provider
            value={{
                goToSlide,
                changeSlide,
                slidesCount: items.length,
                slideNumber: slide,
                items,
            }}
        >
            <div
                style={{ width, height }}
                className='slider'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                    <SlidesList />
            </div>
            <Dots />
        </SliderContext.Provider>
    );
};

Slider.propTypes = {
    autoPlay: PropTypes.bool,
    autoPlayTime: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string
};

Slider.defaultProps = {
    autoPlay: false,
    autoPlayTime: 3000,
    width: "100%",
    height: "100%"
};

export default Slider;