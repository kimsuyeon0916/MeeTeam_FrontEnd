import React, { useState, useEffect } from 'react';
import S from './PortfolioImageModal.styled';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { PortfolioCard, PrimaryBtn, DefaultBtn } from '../../..';
import { useRecoilState } from 'recoil';
import { uploadImageListState } from '../../../../atom';
import { HambergerMenuIcon } from '../../../../assets';

const PortfolioImageModal = ({ onClose }: { onClose: () => void }) => {
	const [uploadImageList, setUploadImageList] = useRecoilState(uploadImageListState);
	const [changeImageList, setChangeImageList] = useState(uploadImageList);

	const orderImageList = () => {
		setUploadImageList(changeImageList);
		onClose();
	};

	const onDragEnd = ({ source, destination }: DropResult) => {
		if (!destination) return;

		const _items = [...changeImageList];
		const [targetItem] = _items.splice(source.index, 1);
		_items.splice(destination.index, 0, targetItem);

		setChangeImageList(_items);
	};

	// --- requestAnimationFrame 초기화
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		const animation = requestAnimationFrame(() => setEnabled(true));

		return () => {
			cancelAnimationFrame(animation);
			setEnabled(false);
		};
	}, []);

	if (!enabled) {
		return null;
	}
	// --- requestAnimationFrame 초기화 END

	return (
		<S.PortfolioImageModalLayout>
			<S.PortfolioImageModalContainer>
				<S.PortfolioImageModalHeader>
					<h2>슬라이드 순서 변경</h2>
				</S.PortfolioImageModalHeader>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId='droppable'>
						{provided => (
							<S.PortfolioImageModalColumn ref={provided.innerRef} {...provided.droppableProps}>
								<S.PortfolioImageList>
									{[...changeImageList].map(({ fileName, url }, index) => (
										<Draggable key={fileName} draggableId={fileName} index={index}>
											{provided => (
												<S.PortfolioImageItem
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
												>
													<S.PortfolioImageListIcon>
														<img src={HambergerMenuIcon} alt='햄버거메뉴아이콘' />
													</S.PortfolioImageListIcon>
													<S.PortfolioImageModalRow>
														<S.PortfolioImageWrapper>
															<PortfolioCard
																key={index}
																mainImageUrl={url}
																clickNumber={index + 1}
															/>
														</S.PortfolioImageWrapper>
														{fileName}
													</S.PortfolioImageModalRow>
													<S.PortfolioImageNumberIcon>{index + 1}</S.PortfolioImageNumberIcon>
												</S.PortfolioImageItem>
											)}
										</Draggable>
									))}
								</S.PortfolioImageList>
								{provided.placeholder}
							</S.PortfolioImageModalColumn>
						)}
					</Droppable>
				</DragDropContext>
				<S.PortfolioImageModalRow>
					<div>
						<DefaultBtn title='취소하기' type='button' handleClick={onClose} />
					</div>
					<div>
						<PrimaryBtn title='저장' type='button' handleClick={orderImageList} />
					</div>
				</S.PortfolioImageModalRow>
			</S.PortfolioImageModalContainer>
		</S.PortfolioImageModalLayout>
	);
};

export default PortfolioImageModal;
