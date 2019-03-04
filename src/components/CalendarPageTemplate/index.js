import React, { Component } from 'react'
import { Loader, Header, Icon, Image, Divider, Container, Card } from 'semantic-ui-react'

import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import EventCards from './Events'
import eventUrls from './data/events'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment) 
class CalendarEmbed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            events: []
        }
    }
    componentDidMount() {
        const events = []
        Object.values(eventUrls).map(async val => {
            let r = await fetch(val, { mode: `cors` })
            let { items } = await r.json()
            console.log('items', items)
            items.map((event) => {
                events.push({
                    location: event.location,
                    start: moment(event.start.dateTime).toDate(),
                    end: moment(event.end.dateTime).toDate(),
                    title: event.summary,
                })
            })
            this.setState({
                events,
                loading: false
            })
        })
    }
    filterAndSort(events) {
        return events
        // .filter(event => { return moment(event.end) - moment() >= 0 }).sort((a, b) => moment(a.start) - moment(b.start))
    }
    render() {
        const { events, loading } = this.state
        console.log('events', events)
        return (
            <div>
                <Divider horizontal>
                    <Header as='h1' href='https://mementolabs.io/blog' style={{ fontFamily: 'Avenir-Medium', margin: '20px' }}><Icon name='calendar outline'/>Upcoming Events</Header>
                </Divider>
                {loading && <Loader active={loading}/>}
                <Card.Group>
                    {this.filterAndSort(events).map((e, i) => {
                        console.log('e', e)
                        return (<Card 
                                    id={i} fluid raised color='blue' key={e.id + e.start}
                                    className={window.location.hash == '#' + i ? 'shake' : ''}
                                    header={e.title} meta={e.location} 
                                    description={<div>
                                        <div>{'Date: ' + moment(e.start).format('ddd, MMM Do YY')}</div><br/><div>{'Time: ' + moment(e.start).format('h:mm a') + ' - ' + moment(e.end).format('h:mm a')}</div></div>
                                    } 
                                />)
                        }
                    )}
                </Card.Group>
            </div>
        )
    }
   
}
class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            events: []
        }
    }
    componentDidMount() {
        Object.values(eventUrls).map(async val => {
            let r = await fetch(val, { mode: `cors` })
            let { items } = await r.json()
            console.log(items)
            var events = []
            items.map((event) => {
                events.push({
                    location: event.location,
                    start: moment(event.start.dateTime).toDate(),
                    end: moment(event.end.dateTime).toDate(),
                    title: event.summary,
                })
            })
            this.setState({
                events: events,
                loading: false
            })
        })
    }

    render() {
        const { loading, events } = this.state
        var content;
        if (loading) {
            content = <div><Loader active={loading}>
                <Header>Just one second</Header>
                <p>We are fetching that content for you.</p>
            </Loader></div>
        } else {
            content = <div>

                <BigCalendar
                    localizer={localizer}
                    style={{ height: '35em' }}
                    startAccessor="start"
                    endAccessor="end"
                    events={events} />
                <Header textAlign='center' content='Upcoming Events' />
                <Divider />
                <EventCards events={events} />
            </div>;
        }
        return (
            <div>
                <div className="App-header">
                    <Header textAlign='center' size='huge'>Calendar</Header>
                    <Divider />
                </div>
                <div className="App-intro">
                    <Container id='0'>
                        {content}
                    </Container>
                </div>

            </div>
        );
    }
}

export { CalendarEmbed }

export default CalendarPage