import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProjectCard, ProjectCardProps } from '.';

const props: ProjectCardProps = {
  title: 'any',
};

describe('<ProjectCard />', () => {
  it('should render', () => {
    renderTheme(<ProjectCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
