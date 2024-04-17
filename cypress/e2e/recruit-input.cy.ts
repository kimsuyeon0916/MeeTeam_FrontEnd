describe('template spec', () => {
	it('passes', () => {
		cy.visit('recruitment/postings');
		cy.contains('구인글 작성').should('be.visible');
		cy.contains('프로젝트').should('be.visible');
		cy.get('[data-cy="recruit-title-input"]').type('대학생 포트폴리오 기반 구인 플랫폼 서비스');
		cy.get('[data-cy="recruit-title-input"]').should(
			'have.value',
			'대학생 포트폴리오 기반 구인 플랫폼 서비스'
		);
		const options = ['교내', '교외', '프로젝트', '스터디', '공모전'];

		// 옵션 요소들을 렌더링할 때마다 각각에 대한 data-cy 속성을 부여합니다.
		options.forEach((option, index) => {
			cy.get('[data-cy="option-span"]').eq(index).should('have.text', option);
		});

		// 각 옵션을 클릭하고 클릭된 옵션이 하이라이트되었는지 확인합니다.
		cy.get('[data-cy="option-span"]').each(($span, index) => {
			cy.wrap($span).click();
			cy.wrap($span).should('have.class', 'highlighted');
		});
	});
});
