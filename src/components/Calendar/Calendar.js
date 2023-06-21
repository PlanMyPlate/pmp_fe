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
      <button type="button" class="btn btn-light" onClick={prevWeek}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
      </svg></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <h2 className="month-title">{MONTHS[sundayDate.getUTCMonth()]} Plates</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button" class="btn btn-light" onClick={nextWeek}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
      </svg></button>
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