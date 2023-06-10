"use client"
import GameCard from '@shared/components/GameCard'
import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaChevronCircleRight } from "react-icons/fa";

const GameList = () => {
  return (
    <>
        <div className='d-flex align-items-center justify-content-between mb-4'>
            <h3>Game Name</h3>
            <Link href='/game/gamename' className='see-more'>See More <FaChevronCircleRight /></Link>
        </div>
        <Row className='g-4'>
          <Col sm={6} lg={3}>
            <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
          </Col>
          <Col sm={6} lg={3}>
            <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
          </Col>
          <Col sm={6} lg={3}>
            <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
          </Col>
          <Col sm={6} lg={3}>
            <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
          </Col>
        </Row>
    </>
  )
}

export default GameList