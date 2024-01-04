import S from './Status.styled';

interface IStatus {
	status: string;
	$check?: boolean;
}

const Status = ({ status, $check }: IStatus) => {
	return <S.Status $check={$check}>{status}</S.Status>;
};

export default Status;
