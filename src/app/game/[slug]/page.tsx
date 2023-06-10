'use client'
import GameCard from '@shared/components/GameCard'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { Col, Row } from 'react-bootstrap'


const GameListContent = () => {

    const gameName = usePathname().split('/')[2]

    return (
        <div className="container">
            <div className='my-5'>
                <div className='mb-4'>
                    <h3 className='text-capitalize'>{gameName}</h3>
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
                    <Col sm={6} lg={3}>
                        <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
                    </Col>
                    <Col sm={6} lg={3}>
                        <GameCard link='/game/basketball/stream' title='GAME1 V GAME 2' img='../' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default GameListContent