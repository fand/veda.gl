import styled from 'styled-components';
import colors from './colors';

const I = styled.i`
  margin: auto 10px;
  font-size: 0.6em;
`;

export default ({ name, open, children }) => (
  <div>
    <div>
      <span>{name()}</span>
    </div>
    {open &&
      <div className="children">
        {children}
      </div>
    }
    <style jsx>{`
      .open {
        transform: rotate(90deg);
      }
      .close {
        transform: rotate(90deg);
      }
    `}</style>
  </div>
)
