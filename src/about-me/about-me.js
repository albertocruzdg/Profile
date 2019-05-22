import React, { Component } from 'react';
import Title from '../shared/title';
import Extract from './extract';
import Photo from '../shared/photo';

class AboutMe extends Component {
    render () {
        return (
            <section>
                <Title>About me</Title>
                <Extract />
                <Photo />
            </section>
        );
    }
}

export default AboutMe;