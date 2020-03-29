import styled from 'styled-components';

type FlexSectionSettings = {
  index?: number;
  backing?: string;
  padding?: string;
};

export const FlexSection = styled.section<FlexSectionSettings>`
  z-index: ${(props) => props.index || 'auto'};
  display: flex;
  padding: ${(props) => props.padding || 'none'};
  background: ${(props) => props.backing || 'unset'};
  align-items: center;
  justify-content: center;
`;

export const ChildFlexSection = styled(FlexSection)`
  position: relative;
  margin-top: -5rem;
  border-radius: 2rem 2rem 0 0;
`;
