import styled from 'styled-components';
import Account from '../Account.styled';

const SchoolCertificationLayout = styled(Account.AccountLayout)`
	b {
		font-weight: 600;
	}
`;

const SchoolCertificationPageForm = styled(Account.AccountForm)``;

const SchoolCertificationButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { SchoolCertificationLayout, SchoolCertificationPageForm, SchoolCertificationButton };

export default S;
