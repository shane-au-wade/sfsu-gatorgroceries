import React from 'react'
import styled from 'styled-components'

const EventInfo = styled.div`
  text-align: left;
  background-color: #442D99;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10%;
`

const EventTile = styled.div`
  display:inline-block;
  width: 80%;
  margin-top: 10%;
`

const EventDate = styled.div`
  font-style: normal;
  line-height: 122.69%;
  font-weight: 500;
  font-size: 20px;
  color: #FFFFFF;
  padding-top: 10px;
`

const EventType = styled.div`
  font-style: normal;
  line-height: 122.69%;
  font-weight: bold;
  font-size: 20px;
  color: #FFFFFF;
  padding-top: 5px;
`

const EventTime = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 122.69%;
  color: #FFFFFF;
  padding-top: 5px;
`

const EventLocation = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 122.69%;
  color: #FFFFFF;
  padding-top: 5px;
`

const SelectEvent = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 122.69%;
  text-align: center;
  color: #754A4A;
  background: #EFCC72;
  padding: 2% 0%;
`



const Event = ({event}) => {
  return (
    <EventTile>
      <EventInfo>
        <EventDate>{event.date} <br /></EventDate>
        <EventType>{event.type} <br /></EventType>
        <EventTime>{event.time} <br /></EventTime>
        <EventLocation>{event.location} <br /></EventLocation>
      </EventInfo>
      <SelectEvent>SELECT EVENT</SelectEvent>
    </EventTile>
  )
}

export default Event