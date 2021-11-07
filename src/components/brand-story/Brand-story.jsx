import React from 'react'
import './styles.scss'
import window from '../../assets/window.png'
import object1 from '../../assets/object-01.png'
import object2 from '../../assets/object-02.png'
import object3 from '../../assets/object-03.png'
import object4 from '../../assets/object-04.png'
import object5 from '../../assets/object-05.png'
import object6 from '../../assets/object-06.webp'
import object7 from '../../assets/object-07.png'
import Custombutton from '../custom-button/custom-button'

const Brandstory = () => {
    return (
        <div className="brand-story">
            <div className="text-brand-story">
                <h1 className="title Text-Style-3"> brand story </h1>
                <span className="subtitle Text-Style-10">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </span>
            </div>

            <div className="content-brand-story">
                <p className="What-Happeneds-Brand-story">What Happened’s Brand story </p>
                <span className="content Text-Style-8" >
                    청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                    봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                    긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                    인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                    아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다.
                </span>

                <Custombutton> see more </Custombutton>
            </div>

            <div
                className='image-brandstory'
                style={{
                    backgroundImage: `url(${window})`
                }}
            />
            <div
                className='image-object1'
                style={{
                    backgroundImage: `url(${object1})`
                }}
            />

            <div className="line"></div>

            <div
                className='image-object6'
                style={{
                    backgroundImage: `url(${object6})`
                }}
            />

            <div
                className='image-object7'
                style={{
                    backgroundImage: `url(${object7})`
                }}
            />

            <div
                className='image-object5'
                style={{
                    backgroundImage: `url(${object5})`
                }}
            />

            <div
                className='image-object4'
                style={{
                    backgroundImage: `url(${object4})`
                }}
            />

            <div
                className='image-object3'
                style={{
                    backgroundImage: `url(${object3})`
                }}
            />

            <div
                className='image-object2'
                style={{
                    backgroundImage: `url(${object2})`
                }}
            />

        </div>
    )
}

export default Brandstory
