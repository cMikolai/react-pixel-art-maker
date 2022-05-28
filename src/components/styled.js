import styled, { createGlobalStyle } from 'styled-components'

// App
export const AppContainer = styled.div`
  display: ${props => props.display};;
  width: 100%;
  height: 100%;
`

// Header
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  background-color: #3F51B5;
  color: #fff;
  align-items: center;
  position: relative;
`

export const HeaderIcon = styled.div`
  font-size: 18px;
  z-index: 1;
  left: 20px;
  position: absolute;
  cursor: pointer;
`

export const HeaderTitle = styled.h1`
  text-align: center;
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: calc(18px + 2vmin);
  width: 100%;
`

// Sidebar
export const SidebarContainer = styled.div`
  background-color: #3F51B5;
  color: #fff;
  margin: 0;
  font-size: calc(16px + 2vmin);
  min-height: 100vh;
  height: 100%;
  flex: 1 0 300px;
  position: relative;

  @media (max-width: 767px) {
    position: fixed;
    width: 300px;
    z-index: 1;
    box-shadow: 2px 5px 10px black;
  }
`

export const SidebarTopSection = styled.div`
  height: 90px;
  font-size: 18px;
  align-items: center;
  display: flex;
  justify-content: right;
  padding-right: 20px;
`

export const SidebarIcon = styled.div`
  cursor: pointer;
`

export const SidebarMainSection = styled.div`
  padding: 20px;
  height: calc(100vh - 165px);
  overflow: scroll;
`

export const SidebarSetting = styled.div`
  border-bottom: 1px solid #fff;
`

export const SidebarTitle = styled.h2`
  color: #fff;
  margin: 0 0 20px 0;
  font-size: 16px;
  width: 100%;
`

export const SidebarFooter = styled.div`
  font-size: 12px;
  text-align: right;
  padding-top: 10px;
  margin: 0 20px 20px 0;

  & a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  & a:hover {
    color: #E81E63;
  }
`

// Sidebar Settings
export const SidebarOption = styled.h2`
  color: #fff;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
`

export const SidebarMenuIcon = styled.span`
  display: inline-block;
  width: 16px;
  margin-right: 5px;
  font-size: 14px;
  height: 100%;
`

export const SidebarSecondLevelIcon = styled.span`
  display: inline-block;
  width: 20px;
  margin-right: 3px;
  font-size: 12px;
  height: 100%;
  text-align: center;
`

export const SidebarLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
`

export const SidebarInput = styled.input`
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

export const SidebarSubmit = styled.input`
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

export const SidebarColorWrapper = styled.div`
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

export const SidebarHint = styled.p`
  font-size: 12px;
  margin-top: 20px;
`

// Canvas
export const GlobalTableStyle = createGlobalStyle`
  table {
    border-spacing: 0;
    margin: 20px;
    border: 1px solid #282c34;
  }

  td {
    width: 20px;
    height: 20px;
    padding: 0;
    border: 1px solid #282c34;
  }
`

export const CanvasContainer = styled.div`
  color: #000;
  margin: 0;
  font-size: calc(16px + 2vmin);
  width: 100%;
`
