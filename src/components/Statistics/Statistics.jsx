import PropTypes from 'prop-types';

export default function Statistics({ title, data }) {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {data.map((stat, index) => (
          <StatItem i={index} key={stat.id}>
            <Label>{stat.label}</Label>
            <span>{stat.percentage}</span>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
