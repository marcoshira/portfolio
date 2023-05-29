import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SkillsWrapper, SkillsWrapperProps } from '.';

const props: SkillsWrapperProps = {
  title: 'any',
};

describe('<SkillsWrapper />', () => {
  it('should render', () => {
    renderTheme(<SkillsWrapper {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
