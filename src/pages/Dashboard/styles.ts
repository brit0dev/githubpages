import styled, { css } from 'styled-components';
import { shade } from 'polished';

type FormProps = {
  hasError: boolean;
};

export const Main = styled.main``;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const SearchPreviewBox = styled.div`
	flex-basis: 100%;
	background: #fff;
	width: 77%;
	padding: 0.25em 1em;
	border-radius: 8px;
	margin-top: 0.5em;
	/* display: none; */

	ul {
		list-style: none;

		li {
			color: #a3a3a3;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px #efefef solid;

			p{
				padding: 0.75em 0.5em;

				span {
					color: #3a3a3a;
					font-weight: bold;
				}
			}

			button {
				background: transparent;
				color: #3a3a3a;
				display: inline;
				padding: 0.3em 0.625em;
				
				border: 1px #dedede solid;
				border-radius: 0.625em;
			}

			button.added{

				opacity: 0.5;
			}
		}
		li:last-child {border:none;}
	}

`;


export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
	flex-wrap: wrap;
	div.input	{
		display: flex;
		flex: 1;

	  input {
  	  flex: 3;
    	height: 70px;
	    padding: 0 24px;
  	  border: 0;
  	  border-radius: 5px 0 0 5px;
   		min-width: 3em;
   		color: #a3a3a3;
  	  border: 1px solid #fff;
   	 	border-right: 0;

    	${(props) =>
      	props.hasError &&
      	css`
        	border-color: #c53030;
      `}

    	&::placeholder {
    	  color: '#a8a8b3';
    	}
  	}
  button {
    flex: 1;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    min-width: 8em;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, '#04d361')};
    }
  }
	}
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    text-decoration: none;
    color: inherit;

    display: flex;
    align-items: center;

    & + a {
      margin-top: 14px;
    }

    &:hover {
      background: ${shade(0.02, '#fff')};
    }
    svg {
      transition: transform 0.2s;
    }
    &:hover svg {
      transform: translateX(7px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 10px;
      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 3px;
      }
    }
  }
`;
