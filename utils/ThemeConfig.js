import { createGlobalStyle} from 'styled-components'


export const lightTheme = {
  body: '#FFF',
  text: '#000000',
  toggleBorder: '#FFF',
  background: '#363537',
  main_color:'#f77305',
  boxShadow:' rgba(33, 35, 38, 0.1)',
  type:'light'
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  main_color:'#f77305',
  boxShadow: '#FFFFFF85',
  type:'dark'


}


export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  li{
  list-style-type: none;
}

a{
  text-decoration: none;
}
`