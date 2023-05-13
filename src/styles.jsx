import styled from "styled-components";
import Background from "./assets/background-one.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 3rem;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 5rem 3.6rem;

  display: flex;
  flex-direction: column;

  height: 100vh;

  width: 100%;
  max-width: 42rem;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 3.4rem;
  line-height: 4rem;

  text-align: center;

  color: #ffffff;

  margin-bottom: 8rem;
`;

export const InputLabel = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.2rem;

  letter-spacing: -0.408px;
  margin-left: 2.5rem;

  color: #eeeeee;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.4rem;

  padding-left: 2.5rem;
  margin-bottom: 3.4rem;
  width: 100%;
  max-width: 34.2rem;
  height: 5.8rem;

  font-weight: 400;
  font-size: 2.4rem;
  line-height: 2.8rem;

  color: #ffffff;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1.4rem;

  width: 100%;
  max-width: 34.2rem;
  height: 7.4rem;

  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.8rem;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.0rem;

  &:hover {
   opacity: 0.8;
  }

  &:active {
   opacity: 0.5;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.4rem;

  width: 100%;
  max-width: 34.2rem;
  height: 5.8rem;

  margin-top: 2rem;

  p {
    font-size: 2rem;
    line-height: 2.8rem;
    color: #ffffff;
    font-weight: bold;
  }

  
`
