import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import {meals, DAYS, MONTHS, addDateBy, areDatesSame, getSunday} from '../../utils';
import './Calendar.css';


const Calendar = () => {
  const [sundayDate, setSundayDate] = useState(getSunday());
  const nextWeek = () => setSundayDate(addDateBy(sundayDate, 7));
  const prevWeek = () => setSundayDate(addDateBy(sundayDate, -7));
  const orgWeek = () => setSundayDate(getSunday());

  return (
    <>
    <FlexBox>
      <button onClick={prevWeek}><ion-icon name="arrow-back-outline"></ion-icon></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2>{MONTHS[sundayDate.getUTCMonth()]} Plates</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={nextWeek}><ion-icon name="arrow-forward-outline"></ion-icon></button>
    </FlexBox>
      {sundayDate.getDate() !== getSunday().getDate() && <div className="today-button"><Button variant="outline-info" size="sm" onClick={orgWeek}>Today</Button></div>}
    <div className="wrapper">
      <HGrid className="main-hgrid" first={"30px"} cols={1}>
        <VGrid rows={3}>
          {meals.map((meal) => (
            <span className="meal">{meal}</span>
          ))}
        </VGrid>
        <HGrid className="days-grid" cols={7}>
          {
            DAYS.map((day, index) => (
            <DayWrapper 
            isToday={
              areDatesSame(new Date(), addDateBy(sundayDate, index))
            }>
                <p className="each-day">
                  {day} - {addDateBy(sundayDate, index).getUTCMonth() + 1}/
                  {addDateBy(sundayDate, index).getUTCDate()}
                </p>
            </DayWrapper>
            ))
          }
        </HGrid>
      </HGrid>
    </div>
    <p className="current-year">{sundayDate.getFullYear()}</p>
    </>
  );
};

const HGrid = styled.div`
display: grid;
grid-template-columns: ${({first}) => first || ""} repeat(${({cols}) => cols}, 1fr);
`

const VGrid = styled.div`
display: grid;
grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
&:first-child {
  margin-top: 15px;
};
`

const DayWrapper = styled.span`
border: 1px solid black;
text-align: center;
background: ${({ isToday }) => isToday ? '#b5d7a8': ''}
`

const FlexBox = styled.div`
display: flex;
justify-content: center;
font-size: 0.8rem;

button {
  font-size: 1rem;
}
`

export default Calendar;