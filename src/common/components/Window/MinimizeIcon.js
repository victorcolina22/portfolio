import PropTypes from 'prop-types'

import minimize from '../../../assets/icons/minimize.svg';

export function MinimizeIcon({ className }) {
  return (
    <img className={className} src={minimize} alt="minimize-icon" />
  )
}

MinimizeIcon.propTypes = {
  className: PropTypes.string
}

export default MinimizeIcon