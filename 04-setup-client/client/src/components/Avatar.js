import styled from 'styled-components';

const Avatar = styled.img`
  border-radius: 50%;
  height: ${p => p.size || '48'}px;
  width: ${p => p.size || '48'}px;
`;

export default Avatar;
