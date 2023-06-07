import * as Styled from './styles';

export type MenuProps = {
  onClickA?: (section: string) => void;
};
export const Menu = ({ onClickA }: MenuProps) => {
  return (
    <Styled.Menu>
      <Styled.MenuItem onClick={() => onClickA('About')}>About</Styled.MenuItem>
      <Styled.MenuItem onClick={() => onClickA('Projects')}>
        Projects
      </Styled.MenuItem>
      <Styled.MenuItem onClick={() => onClickA('Skills')}>
        Skills
      </Styled.MenuItem>
      {/* <Styled.MenuItem onClick={() => onClickA('Courses')}>
        Courses
      </Styled.MenuItem> */}
    </Styled.Menu>
  );
};
