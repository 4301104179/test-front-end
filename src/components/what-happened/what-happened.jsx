import React from 'react'
import Custombutton from '../custom-button/custom-button'
import './styles.scss'
import video from '../../assets/what-happened/video.png'
import video_object_01 from '../../assets/what-happened/video-object-01.png'
import video_object_02 from '../../assets/what-happened/video-object-02.png'
import video_object_03 from '../../assets/what-happened/video-object-03.png'
import video_object_04 from '../../assets/what-happened/video-object-04.png'
import video_object_05 from '../../assets/what-happened/video-object-05.png'
import video_object_06 from '../../assets/what-happened/video-object-06.png'
import video_object_07 from '../../assets/what-happened/video-object-07.png'
import video_object_08 from '../../assets/what-happened/video-object-08.png'
import video_object_09 from '../../assets/what-happened/video-object-09.png'

const Whathappened = () => {
    return (
        <div className="background-what-happened">
            <div className="text-what-happened">
                <h2 className="title"> what happened </h2>
                <span className="subtitle">
                    How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first
                </span>
                <Custombutton> see more </Custombutton>

                <div
                    className='video'
                    style={{
                        backgroundImage: `url(${video})`
                    }}
                />

                <div
                    className='video_object_05'
                    style={{
                        backgroundImage: `url(${video_object_05})`
                    }}
                />

                <div
                    className='video_object_07'
                    style={{
                        backgroundImage: `url(${video_object_07})`
                    }}
                />

                <div
                    className='video_object_06'
                    style={{
                        backgroundImage: `url(${video_object_06})`
                    }}
                />

                <div
                    className='video_object_03'
                    style={{
                        backgroundImage: `url(${video_object_03})`
                    }}
                />

                <div
                    className='video_object_01'
                    style={{
                        backgroundImage: `url(${video_object_01})`
                    }}
                />

                <div
                    className='video_object_04'
                    style={{
                        backgroundImage: `url(${video_object_04})`
                    }}
                />

                <div
                    className='video_object_02'
                    style={{
                        backgroundImage: `url(${video_object_02})`
                    }}
                />

                <div
                    className='video_object_08'
                    style={{
                        backgroundImage: `url(${video_object_08})`
                    }}
                />

                <div
                    className='video_object_09'
                    style={{
                        backgroundImage: `url(${video_object_09})`
                    }}
                />
            </div>


        </div>
    )
}

export default Whathappened
