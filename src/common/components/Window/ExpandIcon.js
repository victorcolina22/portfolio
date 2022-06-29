import PropTypes from 'prop-types'

import squares from '../../../assets/icons/squares.svg';

export function ExpandIcon({ className }) {
  return (
    <img className={className} src={squares} alt="expand-icon" />
  )
}

ExpandIcon.propTypes = {
  className: PropTypes.string
}

export default ExpandIcon