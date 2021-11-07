import React from 'react'
import './styles.scss'
import { ReactComponent as Snsicon } from '../../assets/footer/snsicon.svg'
import { ReactComponent as Snsicon1 } from '../../assets/footer/snsicon1.svg'
import { ReactComponent as Snsicon2 } from '../../assets/footer/snsicon2.svg'

const Footer = () => {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className="footer-subscription-heading">
                    what happened
                </p>
                <p className='footer-subscription-text'>
                    [공지] 개인 정보 처리 방침 변경 사전 안내
                    [공지] 29CM 강남 스토어 영업 종료
                    [공지] 개인 정보 처리 방침 변경 사전 안내
                    [공지] iOS 10 이하 버전 지원 중단 안내
                    [공지] 개인 정보 처리 방침 변경 사전 안내
                </p>

                <p className='footer-subscription-text1'>
                    © 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침
                </p>
            </section>

            <div class='footer-links'>
                <div className="footer-link-wrapper">
                    <div class='footer-link-items'>
                        <span className="footer-title">about us</span>
                        <span className="option">회사 소개 </span>
                        <span>인재 채용</span>
                        <span>상시 할인 혜택</span>
                    </div>
                    <div class='footer-link-items'>
                        <span className="footer-title">my order</span>
                        <span>내 주문  </span>
                        <span>주문 배송</span>
                        <span> 취소 / 교환 / 반품 내역</span>
                        <span>  상품 리뷰 내역</span>
                        <span>  증빙 서류 발급</span>
                    </div>
                    <div class='footer-link-items'>
                        <span className="footer-title">my account</span>
                        <span>회원 정보 수정</span>
                        <span>회원 등급</span>
                        <span>마일리지 현황</span>
                        <span>쿠폰</span>
                    </div>
                    <div class='footer-link-items'>
                        <span className="footer-title">help</span>
                        <span>1 : 1 상담 내역</span>
                        <span>상품 Q & A 내역</span>
                        <span>공지 사항</span>
                        <span> 자주하는 질문</span>
                        <span> 고객의 소리</span>
                    </div>
                </div>

                <div className="link-option">
                    <Snsicon className="option" />
                    <Snsicon1 className="option"/>
                    <Snsicon2 className="option"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
