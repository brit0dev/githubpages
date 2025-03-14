import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
  -webkit-font-smoothing: antialiased;
}
body, input, button{
  font: 16px Roboto, sans-serif;
}
#root {
  margin: 0 auto;
	padding: 40px 0px;
}
button{
  cursor:pointer;
}
main {
	max-width: 960px;
	padding: 0px 20px;
	margin: 0 auto;
}

}
`;
