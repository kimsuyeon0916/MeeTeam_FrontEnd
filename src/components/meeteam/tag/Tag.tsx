import S from './Tag.styled';

interface ITag {
	type: string;
	$recruit?: boolean;
}

const Tag = ({ type, $recruit }: ITag) => {
	return <S.Tag $recruit={$recruit}>{type}</S.Tag>;
};

export default Tag;
