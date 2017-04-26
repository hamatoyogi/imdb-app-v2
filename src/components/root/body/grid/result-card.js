import React, { Component, PropTypes } from 'react';
import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const textColor = '#333333';

const MovieCard = styled.div`
  width: 260px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 5px 5px 5px 5px #003366;
  `;

const YearHeader = styled.div`
  color: ${ textColor };
  font-family: 'Roboto';
  font-size: 26px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
`;

const ContentFooter = styled.div`
  color: ${ textColor }
  font-family: 'Roboto condensed';
  font-weight: bold;
  display: flex;
  justify-content: center;
  `;


export class ResultCard extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { Poster, Title, Year, Type } = this.props.data;

    const TitleIcon = styled.i`
      width: 26px;
      height: 26px;
      background-image: url("src/assets/${ Type === 'movie' 
      ? 'Movie.svg' : ( Type === 'series' ? 'TV.svg' : 'Other.svg' ) }");
    `;

    return (
      <Col xs={ 12 } md={ 6 } lg={ 4 }>
        <MovieCard>
          <div style={ { width: '240px' } }>
            <YearHeader>
              <TitleIcon/>
              { Year }
            </YearHeader>
            <img style={ {
              width: 'inherit',
              margin: '8px'
            } } src={ Poster }/>
            <ContentFooter>{ Title }</ContentFooter>
          </div>
        </MovieCard>
      </Col>
    )
  }
}