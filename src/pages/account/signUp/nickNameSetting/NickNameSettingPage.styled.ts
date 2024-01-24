import styled from 'styled-components';
import Account from '../../Account.styled';

const NickNameSettingPageLayout = styled(Account.AccountLayout)`
	h1 {
		text-align: center;
		white-space: pre-wrap;
	}
`;

const NickNameSettingPageForm = styled(Account.AccountForm)``;

const NickNameSettingButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { NickNameSettingPageLayout, NickNameSettingPageForm, NickNameSettingButton };

export default S;
