import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const { as, href, ...other } = props;

  return <NextLink href={href} as={as} ref={ref} {...other}></NextLink>;
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  prefetch: PropTypes.bool,
};

/**
 * Link wrapper
 *
 * @param {Object} props input props
 * @return {JSX} link tag
 */
function Link(props) {
  const {
    href,
    activeClassName = "active",
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]:
      router && router.pathname === pathname ? activeClassName : false,
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

// eslint-disable-next-line react/display-name
export default React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));
