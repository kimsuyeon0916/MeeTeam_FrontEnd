import styled from 'styled-components';
import Account from '../../Account.styled';

const NicknameSettingPageLayout = styled(Account.AccountLayout)`
	h1 {
		text-align: center;
		white-space: pre-wrap;
	}
`;

const NicknameSettingPageForm = styled(Account.AccountForm)`
	align-items: center;
	justify-content: center;
`;

const NicknameSettingPageContainer = styled.div`
	width: 100%;
`;

const S = { NicknameSettingPageLayout, NicknameSettingPageForm, NicknameSettingPageContainer };

export default S;
