import styled from 'styled-components'

// Sidebar Settings
export const Option = styled.h2`
  color: #fff;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`

export const MenuIcon = styled.span`
  display: inline-block;
  width: 16px;
  margin-right: 5px;
  font-size: 14px;
  height: 100%;
`

export const SecondLevelIcon = styled.span`
  display: inline-block;
  width: 20px;
  margin-right: 3px;
  font-size: 12px;
  height: 100%;
  text-align: center;
`

export const Label = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
`

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-size: 12px;
  padding: 10px 0 10px 15px;
  border-radius: 5px;
  border: none;
  max-width: 150px;
  margin: 5px 0 5px 15px;
`

export const Submit = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  font-size: 12px;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin: 0 0 20px 0;
  background-color: #E81E63;
  color: #fff;
  cursor: pointer;
`

export const ColorWrapper = styled.div`
  margin-bottom: 20px;

  & span div {
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid black;
    margin-right: 12px !important;
  }

  & span div span div {
    border: 1px solid black;
  }
`

export const Hint = styled.p`
  font-size: 12px;
  margin-top: 20px;
`