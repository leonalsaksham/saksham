import React from 'react'
import { Card } from 'react-bootstrap'

interface IScheduleCardProps {
    title: string,
    time: string
}

const ScheduleCard = ({title , time}:IScheduleCardProps) => {
    return (
        <Card className='scheduleCard'>
            <Card.Body className='scheduleCard_body'>
                <Card.Title className='scheduleCard_body_title'>{title}</Card.Title>
                <p className='scheduleCard_body_time'>{time}</p>
            </Card.Body>
        </Card>
    )
}

export default ScheduleCard