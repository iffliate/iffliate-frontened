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

.Toastify__toast-icon svg{
  color: white !important;
  fill: white;
}

.toast-message {
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #38a169;
    min-width: 300px;
    padding: 1rem 1rem;
}
.toast-message-err{
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #e53e3e;
    min-width: 300px;
    padding: 1rem 1rem;
}
`


const view = `"{
  "items":
  [
    {
      "id":"2",
      "name":"Baby Spinach",
      "slug":"baby-spinach","unit":"2Pfund","is_digital":false,
      "image":"https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/2/conversions/BabySpinach-thumbnail.jpg",
      "stock":10,"price":0.6,"quantity":1,"itemTotal":0.6
    }],
    "isEmpty":false,"totalItems":1,"totalUniqueItems":1,"total":0.6,"meta":null}"`