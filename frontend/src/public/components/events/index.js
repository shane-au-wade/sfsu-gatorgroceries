import React, {useState, useEffect} from 'react'
import LogoHeader from '../LogoHeader'
import Event from '../../../admin/components/adminEvent/adminEvent'
import styled from 'styled-components'
import eventServices from '../../services/events'

const PageWrapper = styled.div`
  
  max-width: 750px;
  margin-bottom: 10%;
`

const EventsWrapper = styled.div`
  width:100%;
`

const Title = styled.h3`
  text-align: center;
  padding: 20px;
`

const Events = (props) => {
  const [events, setEvents] = useState([])

  useEffect(() => {

      console.log('props student events ',props)
      eventServices.getActiveEvents().then(events => {
      setEvents(events)

    }).catch(err => {
      console.error('Student/Events Error: ', err)
    })
  }, [])

  const DisplayEvents = () => {
    return events.map((event) =>  
        <Event
        key={event.id}
        id={event.id}
        date={event.date}
        time={event.time}
        name={event.name}
        location={event.location}
        menu={event.menu}
        editIcon='hide'
        order={true}
        student={props.location.state[0]}
        ></Event>
    )
  }

  return (
    <PageWrapper>
      <LogoHeader />
      <Title>Events</Title>
      <EventsWrapper>
        {DisplayEvents()}
      </EventsWrapper>
    </PageWrapper>
  )
}

export default Events