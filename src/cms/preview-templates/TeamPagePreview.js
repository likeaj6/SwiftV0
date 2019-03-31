import React from 'react'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../../components/AboutPageTemplate'

const TeamPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    meta_title={entry.getIn(['data', 'meta_title'])}
    meta_description={entry.getIn(['data', 'meta_description'])}
    content={widgetFor('body')}
  />
)

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TeamPagePreview
