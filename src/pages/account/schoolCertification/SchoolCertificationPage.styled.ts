import styled from 'styled-components';
import Account from '../Account.styled';

const SchoolCertificationLayout = styled(Account.AccountLayout)`
	b {
		font-weight: 600;
	}
`;

const SchoolCertificationPageForm = styled(Account.AccountForm)`
	.school-certification_form-row {
		display: flex;
		flex-direction: column;
		row-gap: 1.35rem;
		width: 34.8rem;
	}
`;

const SchoolCertificationButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { SchoolCertificationLayout, SchoolCertificationPageForm, SchoolCertificationButton };

export default S;
