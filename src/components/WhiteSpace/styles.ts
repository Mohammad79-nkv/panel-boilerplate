import styled from 'styled-components';

export const Container = styled.div<{
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
}>`
  overflow: hidden;
  margin: ${p => {
    let space;
    switch (p.size) {
      case 'xs':
        space = '3px';
        break;
      case 'sm':
        space = '6px';
        break;
      case 'md':
        space = '9px';
        break;
      case 'lg':
        space = '15px';
        break;
      case 'xl':
        space = '21px';
        break;
      default:
        space = '3px';
        break;
    }

    return `${space} auto`;
  }};
`;
