import './Styles.scss';

import {Card} from "../../card/Card";

export const WhatWeDo = () => (
    <span id="what-we-do">
        <p className='heading'>What We Do</p>
        <span className='text-container'>
            <Card
                className={'description-left'}
                description={
                    `Are you tired of tractors that are more dull than a rusty plow?
                    Introducing "Don Jeere" – where laughter meets horsepower! We don't just plow fields; we plow through boredom with tractor models that'll have you giggling all the way to the harvest.`
                }
            />
            <Card
                className={'description-right'}
                description={
                    `From the "Plowing Powerhammer" to the "Serious Seeder"," our tractors are engineered to make farming fun again. Say goodbye to yawns and hello to yee-haws with Don Jeere – because who says farming can't be a laugh riot?`
                }
            />
        </span>
    </span>
)