import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Section = styled.section`
  background-color: ${(props) => props.darkMode? 'salmon': ''};
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const SectionTitle = styled.div`
  font-size: ${(props) => (props.size ? `${props.size}px` : "2rem")};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5em;
`;

export const SectionContent = styled.div`
  display: ${(props) => (props.flex ? "flex" : "block")};
  justify-content: ${(props) => (props.flex ? "center" : "")};
  flex-wrap: wrap;
  gap: 1rem;
  position: relative;
`;

export const Banner = styled.div`
  width: 100%;
  background-color: #eee;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5em 0.8em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  `;

export const Button = styled.button`
  white-space: ${(props) => props.nowrap? 'nowrap' : ''};
  padding: 0.5em 0.8em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 0.5em 0.8em;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.nowrap? 'no-wrap' : 'wrap'};
  gap: 1rem;
  justify-content: ${(props) => props.fullwidth? 'space-between' : ''};
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Col = styled.div`
  background-color: ${(props) => props.bg? props.bg : ''};
  display: ${({xs, sm, md, lg}) => xs == 0 || sm == 0 || md == 0 || lg == 0? 'none' : 'block'};
  flex: ${({xs}) => xs? `1 0 ${(100/12) * xs}%` : '1 0 auto'};
  max-width: ${({xs}) => xs? `${(100/12) * xs}%` : '100%'};
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: ${({sm, md, lg}) => sm == 0 || md == 0 || lg == 0? 'none' : 'block'};
    flex: ${({sm}) => sm? `1 0 ${(100/12) * sm}%` : ''};
    max-width: ${({sm}) => sm? `${(100/12) * sm}%` : ''};
  }
  @media ${(props) => props.theme.breakpoints.md} {
    display: ${({md, lg}) => md == 0 || lg == 0? 'none' : 'block'};
    flex: ${({md}) => md? `1 0 ${(100/12) * md}%` : ''};
    max-width: ${({md}) => md? `${(100/12) * md}%` : ''};
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    display: ${({lg}) => lg == 0? 'none' : 'block'};
    flex: ${({lg}) => lg? `1 0 ${(100/12) * lg}%` : ''};
    max-width: ${({lg}) => lg? `${(100/12) * lg}%` : ''};
  }
`

export const Hero = styled.div`
  width: 100%;
  padding: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid ${(props) => props.theme.colors.primary1};
  margin: 0 auto;
`
