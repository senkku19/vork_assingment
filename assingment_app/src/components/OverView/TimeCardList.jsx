import React, { useEffect, useState } from "react"
import useTimeCardStore from "../../store/timeCard";
import { getMonth, getYear, parseISO } from "date-fns";


const TimeCardList = ({ currentDate }) => {
    const timeCards = useTimeCardStore(state => state.timeCards);
    const [filteredCards, setFilteredCards] = useState([]);

    const filterTimeCards = () => {
        const month = getMonth(currentDate)
        const year = getYear(currentDate)
        const filterCards = timeCards.filter(timeCard => {
            const date = parseISO(timeCard.date);
            if (getYear(date) === year && getMonth(date) === month) {
                return timeCard;
            }
        })
        setFilteredCards(filterCards)
    }

    useEffect(() => {
        filterTimeCards()
    }, [currentDate])

    return (
        <>
        {filteredCards.map(timeCard => {
            <div key={timeCard.id}>
                <p>{timeCard.date}</p>
            </div>
        })

        }
        </>
    )
}

export default TimeCardList;