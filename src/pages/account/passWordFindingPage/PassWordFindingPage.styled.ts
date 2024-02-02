import styled from 'styled-components';
import Account from '../Account.styled';

const PassWordFindingPageLayout = styled(Account.AccountLayout)`
	h1 {
		text-align: center;
		white-space: pre-wrap;
	}
`;

const PassWordFindingPageForm = styled(Account.AccountForm)``;

const PassWordFindingPageButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { PassWordFindingPageLayout, PassWordFindingPageForm, PassWordFindingPageButton };

export default S;
