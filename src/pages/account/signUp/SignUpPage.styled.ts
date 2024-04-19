import styled from 'styled-components';
import Account from '../Account.styled';

const SignUpPageLayout = styled(Account.AccountLayout)`
	margin: 10rem auto;
`;

const SignUpPageForm = styled(Account.AccountForm)`
	row-gap: 7.5rem;
`;

const SignUpButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { SignUpPageLayout, SignUpPageForm, SignUpButton };

export default S;
