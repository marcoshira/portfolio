import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ProjectWrapper, ProjectWrapperProps  } from '.';

const props: ProjectWrapperProps = {
    title: 'any',
};

describe('<ProjectWrapper />', () => {
    it('should render', () => {
        renderTheme(<ProjectWrapper {...props} />);

        expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
    });
});
