import React from "react";

import PropTypes from "prop-types";

const Button = ({ children, type }) => <button type={type}>{children}</button>;

Button.propTypes = {
  /**

   * This is a description for this prop.

   * Button type.

   */

  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  type: "button",
};

export default Button;