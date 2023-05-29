import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SkillsIcon, SkillsIconProps } from '.';

const props: SkillsIconProps = {
  title: 'any',
};

describe('<SkillsIcon />', () => {
  it('should render', () => {
    renderTheme(<SkillsIcon {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
