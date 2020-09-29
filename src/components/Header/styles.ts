import styled from 'styled-components'

interface ContainerProps {
  size?: 'small' | 'large'
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        transition: opacity 0.2s;
        opacity: 0.8;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        &.selected {
          opacity: 1;
          font-weight: 600;
          padding-bottom: 10px;
          border-bottom: 2px solid #ff872c;
        }
      }
    }
  }
`
