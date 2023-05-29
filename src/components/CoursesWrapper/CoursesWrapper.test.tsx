import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CoursesWrapper, CoursesWrapperProps } from '.';

const props: CoursesWrapperProps = {
  title: 'any',
};

describe('<CoursesWrapper />', () => {
  it('should render', () => {
    renderTheme(<CoursesWrapper {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
