import React from 'react';
import styled from 'styled-components';
import {meals, DAYS, addDateBy, areDatesSame, getSunday} from '../../utils';
import './Calendar.css';


const Calendar = () => {
  return (
    <>
    <FlexBox>
      <p>from: {getSunday()?.toDateString()}</p>
      <p>today: {new Date().toDateString()}</p>
      <p>to: {addDateBy(getSunday(), 6).toDateString()}</p>
    </FlexBox>
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
            <DayWrapper isToday={
              areDatesSame(new Date(), addDateBy(getSunday(), index))
            }>
              <p className="each-day">{day}</p>
            </DayWrapper>
            ))
          }
        </HGrid>
      </HGrid>
    </div>
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
justify-content: space-around;
font-size: 0.8rem;
`

export default Calendar;