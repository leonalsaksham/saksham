'use client'
import ScheduleCard from '@features/schedule/ScheduleCard/page'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Schedule = () => {
    return (
        <div className="container">
            <div className='my-5 pageContainer'>
                <div className='mb-4'>
                    <h2 className='text-center'>Schedule</h2>
                </div>

                <div className='mb-4'>
                    <h4 className='mb-4'>Game Name</h4>
                    <Row className='g-4'>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                    </Row>
                </div>
                <div className='mb-4'>
                    <h4 className='mb-4'>Game Name</h4>
                    <Row className='g-4'>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                        <Col sm={6} lg={3}>
                            <ScheduleCard title='GAME1 V GAME 2' time='12:30 PM' />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Schedule