import styled from 'styled-components';

type FlexSectionSettings = {
  index?: number;
  backing?: string;
  padding?: string;
};

export const AbsoluteContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const FlexSection = styled.section<FlexSectionSettings>`
  align-items: center;
  background: ${(props) => props.backing || 'unset'};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${(props) => props.padding || 'none'};
  z-index: ${(props) => props.index || 'auto'};
`;

export const ChildFlexSection = styled(FlexSection)`
  align-items: stretch;
  border-radius: 2rem 2rem 0 0;
  justify-content: space-evenly;
  margin-top: -5rem;
  position: relative;
`;
