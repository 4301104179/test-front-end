import React from 'react'
import './styles.scss'
import Custombutton from '../custom-button/custom-button'
import newsobject3 from '../../assets/news-object-03.png'
import newsobject2 from '../../assets/news-object-02.png'
import newsobject4 from '../../assets/news-object-04.png'
import newsobject5 from '../../assets/news-object-05.png'
import img1 from '../../assets/news-img-01.png'
import img3 from '../../assets/news-img-03.png'
import img4 from '../../assets/news-img-04.png'
import img5 from '../../assets/news-img-05.png'
import newObject from '../../assets/news-object-03@2x.png'


const productItems = [
    {
        id: 1,
        title: 'B Brand',
        image: img3
    },
    {
        id: 2,
        title: 'C Brand',
        image: img3
    },
    {
        id: 3,
        title: 'D Brand',
        image: img4
    },
    {
        id: 4,
        title: 'E Brand',
        image: img5
    }
]

const Happendissue = () => {
    return (
        <div className="background-happend-issue">
            <div className="text-happend-issue">
                <h2 className="title"> Happened’s issue </h2>
                <span className="subtitle Text-Style-9">
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                </span>

                <Custombutton> see more </Custombutton>
            </div>

            <div
                className='icon-object03'
                style={{
                    backgroundImage: `url(${newsobject3})`
                }}
            />

            <div
                className='icon-object02'
                style={{
                    backgroundImage: `url(${newsobject2})`
                }}
            />

            <div className="product">
                <div className="Rectangle-678">
                    <span className="whpn-issue"> whpn
                        issue
                    </span>

                    <div
                        className='new-img01'
                        style={{
                            backgroundImage: `url(${img1})`
                        }}
                    />
                </div>

                {productItems.map((prod) => (
                    <div
                        className={`${prod.title === 'D Brand' ? 'Rectangle-678-copy1' : ''} Rectangle-678-copy`}
                        key={prod.id}
                    >
                        <span
                            className={`brand-title`}
                        >
                            {prod.title}
                        </span>
                        <div
                            className="brand-img"
                            style={{
                                backgroundImage: `url(${prod.image})`
                            }}
                        />
                    </div>
                ))}
            </div>

            <div
                className="iconObject3-2x"
                style={{
                    backgroundImage: `url(${newObject})`
                }}
            />

            <div
                className="icon-object04"
                style={{
                    backgroundImage: `url(${newsobject4})`
                }}
            />

            <div
                className="icon-object05"
                style={{
                    backgroundImage: `url(${newsobject5})`
                }}
            />



        </div>
    )
}

export default Happendissue
