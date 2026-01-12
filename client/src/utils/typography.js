/**
 * Typography system utilities for Auro Tech Solutions
 * Based on the design system specifications
 */

// Typography class mappings
export const typographyClasses = {
  hero: "text-hero", // H1 / Hero title - SF Pro Display, 600
  heading: "text-heading", // H2 / Section heading - SF Pro Display, 600
  subheading: "text-subheading", // Sub-heading / Tag - SF Pro Text, 500
  description: "text-description", // Paragraph / Description - SF Pro Text, 400
  button: "text-button", // Buttons - SF Pro Text, 500
  numbers: "text-numbers", // Numbers (optional) - SF Pro Display, 600
};

// Typography component props
export const getTypographyProps = (variant) => {
  const baseProps = {
    className: typographyClasses[variant] || typographyClasses.description,
  };

  return baseProps;
};

// Apple Official Font Stack for all typography
const APPLE_FONT_STACK = `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif`;

// Font specifications for reference
export const typographySpecs = {
  hero: {
    fontFamily: APPLE_FONT_STACK,
    weight: 600,
    usage: "H1 / Hero title",
  },
  heading: {
    fontFamily: APPLE_FONT_STACK,
    weight: 600,
    usage: "H2 / Section heading",
  },
  subheading: {
    fontFamily: APPLE_FONT_STACK,
    weight: 500,
    usage: "Sub-heading / Tag",
  },
  description: {
    fontFamily: APPLE_FONT_STACK,
    weight: 400,
    usage: "Paragraph / Description",
  },
  button: {
    fontFamily: APPLE_FONT_STACK,
    weight: 500,
    usage: "Buttons",
  },
  numbers: {
    fontFamily: APPLE_FONT_STACK,
    weight: 600,
    usage: "Numbers (optional)",
  },
};

// Utility function to apply typography to existing elements
export const applyTypography = (element, variant = "description") => {
  if (element && typographyClasses[variant]) {
    element.classList.add(typographyClasses[variant]);
  }
};

// React component for consistent typography usage
export const Typography = ({
  variant = "description",
  children,
  className = "",
  as: Component = "span",
  ...props
}) => {
  const typographyClass =
    typographyClasses[variant] || typographyClasses.description;

  return (
    <Component className={`${typographyClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

// Pre-built typography components
export const HeroText = ({ children, className = "", ...props }) => (
  <Typography variant="hero" as="h1" className={className} {...props}>
    {children}
  </Typography>
);

export const Heading = ({ children, className = "", ...props }) => (
  <Typography variant="heading" as="h2" className={className} {...props}>
    {children}
  </Typography>
);

export const Subheading = ({ children, className = "", ...props }) => (
  <Typography variant="subheading" className={className} {...props}>
    {children}
  </Typography>
);

export const Description = ({ children, className = "", ...props }) => (
  <Typography variant="description" className={className} {...props}>
    {children}
  </Typography>
);

export const ButtonText = ({ children, className = "", ...props }) => (
  <Typography variant="button" className={className} {...props}>
    {children}
  </Typography>
);

export const NumberText = ({ children, className = "", ...props }) => (
  <Typography variant="numbers" className={className} {...props}>
    {children}
  </Typography>
);
