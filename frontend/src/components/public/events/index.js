import React, {useState, useEffect} from 'react'
import LogoHeader from '../LogoHeader'
import Event from './Event'
import styled from 'styled-components'

const PageWrapper = styled.div`
  text-align: center;
  max-width: 750px;
  margin-bottom: 10%;
`

const EventsWrapper = styled.div`
  text-align: center;
  width:100%;
`

const dummyData = [
  {
    date: 'JAN 01',
   type: 'Weekly Distribution',
   time: '1:30 PM - 3:30 PST',
   location: 'SFSU Annex1'
  },
  {
    date: 'JAN 01',
   type: 'Weekly Distribution',
   time: '1:30 PM - 3:30 PST',
   location: 'SFSU Annex1'
  },
  {
    date: 'JAN 01',
   type: 'Weekly Distribution',
   time: '1:30 PM - 3:30 PST',
   location: 'SFSU Annex1'
  },
  {
    date: 'JAN 01',
   type: 'Weekly Distribution',
   time: '1:30 PM - 3:30 PST',
   location: 'SFSU Annex1'
  },
  {
    date: 'JAN 01',
   type: 'Weekly Distribution',
   time: '1:30 PM - 3:30 PST',
   location: 'SFSU Annex1'
  },
  
]

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(dummyData)
  }, [])

  const DisplayEvents = () => {
    return events.map((event, eventIndex) => <Event key={eventIndex} event={event} />)
  }

  return (
    <PageWrapper>
      <LogoHeader />
      <EventsWrapper>
        {DisplayEvents()}
      </EventsWrapper>
    </PageWrapper>
  )
}

export default Events