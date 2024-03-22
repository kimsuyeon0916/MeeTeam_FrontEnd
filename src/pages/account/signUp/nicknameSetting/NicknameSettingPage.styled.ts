import styled from 'styled-components';
import Account from '../../Account.styled';

const NicknameSettingPageLayout = styled(Account.AccountLayout)`
	h1 {
		text-align: center;
		white-space: pre-wrap;
	}
`;

const NicknameSettingPageForm = styled(Account.AccountForm)``;

const NicknameSettingButton = styled(Account.AccountButton)`
	width: 16.5rem;
	margin: 0 auto;
`;

const S = { NicknameSettingPageLayout, NicknameSettingPageForm, NicknameSettingButton };

export default S;
