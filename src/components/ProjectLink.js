import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

export default function ProjectLink({fields, project, projectIndex}) {
  const projectKey = projectIndex;

  function handleMouseOver(event) {}

  function handleMouseLeave(event) {}

  return (
    <div
      key={projectKey}
      className="projects-page__item my-4 xs:my-2 animation-appear"
      onFocus={handleMouseOver}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{animationDelay: `${(projectIndex + 1) * 100 + 100}ms`}}
    >
      <Link className="projects-page__link" to={fields.slug}>
        <h1 className="projects-page__title f3 font-bold">{project.title}</h1>

        <p className="projects-page__excerpt b2 my-2">{project.date}</p>

        <p className="projects-page__excerpt b1 mt-2 pb-4">{project.excerpt}</p>
      </Link>
    </div>
  );
}

ProjectLink.propTypes = {
  fields: PropTypes.shape({slug: PropTypes.string}).isRequired,
  project: PropTypes.shape({
    date: PropTypes.string,
    excerpt: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  projectIndex: PropTypes.number.isRequired,
};
