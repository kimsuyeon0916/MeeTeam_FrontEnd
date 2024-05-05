import React, { useRef, useState, useCallback } from 'react';
import RoleCard from '../../role/RoleCard';
import S from './RecruitRoles.styled';
import { RoleInfo } from '../../../../types';
import { throttle } from '../../../../utils';

const RecruitRoles = (props: { roles: RoleInfo[] }) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false); // 요소를 드래그하고 있는가?
	const [startX, setStartX] = useState<number>(0); // 드래그 시작 시점의 X축 좌표값
	const [totalX, setTotalX] = useState<number>(0); // 드래그 시작 시점의 스크롤 포지션이 포함된 X축 좌표값

	const preventUnexpectedEffects = useCallback((event: React.MouseEvent) => {
		event.preventDefault();
		event.stopPropagation();
	}, []);

	const onDragStart = (event: React.MouseEvent) => {
		setIsDragging(true);
		const x = event.clientX;
		setStartX(x);
		if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
			setTotalX(x + scrollRef.current.scrollLeft);
			console.log('ji');
		}
	};
	const onDragMove = (event: React.MouseEvent) => {
		if (!isDragging) return;

		throttle(function () {
			preventUnexpectedEffects(event);
			const scrollLeft = totalX - event.clientX;

			if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
				// 스크롤 발생
				scrollRef.current.scrollLeft = scrollLeft;
			}
		}, 50);
	};
	const onDragEnd = () => {
		if (!isDragging) return;
		if (!scrollRef.current) return;

		setIsDragging(false);
	};

	return (
		<S.RecruitRoles>
			<h3>모집역할</h3>
			<section
				className='scroll'
				ref={scrollRef}
				onMouseDown={onDragStart}
				onMouseMove={onDragMove}
				onMouseUp={onDragEnd}
				onMouseLeave={onDragEnd}
			>
				<section className='container-roles'>
					{props.roles.map((role, index) => (
						<RoleCard key={index} {...role} />
					))}
				</section>
			</section>
		</S.RecruitRoles>
	);
};

export default RecruitRoles;
