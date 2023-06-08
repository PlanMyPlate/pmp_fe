import React from 'react';
import styled from 'styled-components';
import {meals, DAYS} from '../../utils';
import './Calendar.css';


const Calendar = () => {
  return (
    <>
    <div className="wrapper">
      <HGrid className="main-hgrid" first={"30px"} cols={1}>
        <VGrid rows={3}>
          {meals.map((meal) => (
            <span className="meal">{meal}</span>
          ))}
        </VGrid>
        <HGrid className="days-grid" cols={7}>
          {
            DAYS.map((day) => (
            <span className="day-wrapper">
              <p className="each-day">{day}</p>
            </span>
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

export default Calendar;