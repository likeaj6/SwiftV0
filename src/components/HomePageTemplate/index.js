import React from 'react'
import Helmet from 'react-helmet'
import { Header, Icon } from 'semantic-ui-react'
import Offerings from '../Offerings'
import {CalendarEmbed} from '../CalendarPageTemplate'
import PropTypes from 'prop-types'

import finance from '../../assets/finance.svg'
import savings from '../../assets/savings.svg'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 style={{textAlign: 'center', fontFamily: 'Avenir-Medium', fontSize: '4rem'}} className='title'>
                  {title}
                </h1>
                {/* <img src={seed_grow} style={{ height: '30rem', width: '30rem'}} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2' style={{ textAlign: 'center' }}>
                    {heading}
                  </h3>
                  <img src={finance} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '15rem' }} />
                  <img src={savings} style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '15rem'}} />
                  <p style={{textAlign: 'center'}}>{description}</p>
                </div>
                {/* <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <CalendarEmbed />
                </div>
                {/* <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
