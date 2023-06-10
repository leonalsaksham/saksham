"use client"
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

interface ICardProps {
  title?: string,
  img: string,
  link: string
}

const GameCard = ({ title, img , link }: ICardProps) => {
  return (
    <Card className='gameCard'>
      <Link href={link} className='clickable-link' />
      <Card.Img className='gameCard_img' variant="top" src={img} />
      {
        title &&
        <Card.Body className='gameCard_body'>
          <Card.Title className='gameCard_body_title'>{title}</Card.Title>
        </Card.Body>
      }
    </Card>
  )
}

export default GameCard