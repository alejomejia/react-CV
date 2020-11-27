import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PortfolioGrid from '../../PortfolioGrid';

import CoverWPMS from '../../../images/portfolio/wpms.jpg';
import CoverEJ from '../../../images/portfolio/educational-justice.jpg';
import CoverEcocargappDesktop from '../../../images/portfolio/ecocargapp-desktop.jpg';
import CoverEcocargappMobile from '../../../images/portfolio/ecocargapp-mobile.jpg';
import CoverCESUniversity from '../../../images/portfolio/ces-university.jpg';
import CoverHolaDr from '../../../images/portfolio/hola-dr.jpg';
import CoverInsightCrime from '../../../images/portfolio/insight-crime.jpg';
import CoverEficacia from '../../../images/portfolio/eficacia.jpg';
import CoverCIPractident from '../../../images/portfolio/ci-practident.jpg';
import CoverProlirica from '../../../images/portfolio/prolirica-antioquia.jpg';

import PORTFOLIO from './data.json';
import { Wrapper, Title, Grid } from './styles';

const ContentPortfolio = ({ title }) => {
  const getCover = (name) => {
    switch (name) {
      case 'wpms':
        return CoverWPMS;
      case 'ej':
        return CoverEJ;
      case 'ecocargapp-desktop':
        return CoverEcocargappDesktop;
      case 'ecocargapp-mobile':
        return CoverEcocargappMobile;
      case 'ces':
        return CoverCESUniversity;
      case 'holadr':
        return CoverHolaDr;
      case 'ic':
        return CoverInsightCrime;
      case 'eficacia':
        return CoverEficacia;
      case 'cipractident':
        return CoverCIPractident;
      case 'prolirica':
        return CoverProlirica;
      default:
        return console.error('PORTFOLIO: No cover found');
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <p>Some latest projects...</p>
      <Grid>
        {PORTFOLIO.map((item) => (
          <Fragment key={item.id}>
            <PortfolioGrid
              title={item.title}
              work={item.work}
              cover={getCover(item.cover)}
              link={item.link}
            />
          </Fragment>
        ))}
      </Grid>
    </Wrapper>
  );
};

ContentPortfolio.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentPortfolio;
