import React from 'react'
import union from '../assets/Union.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Methsec1 = () => {
    const percentage = 33;
    const percentage1 = 66;

    return (
        <div>
            <h1 className='process px-2'>Selection Process</h1>

            <section className="cirlce px-2">
                <p>There are three various steps in this stage, and they are as follow:</p>
                <div className="line ps-2">

                    <div className='d-flex'>
                        <div><img src={union} alt="" /></div>
                        <div>
                            <div className="hiring ms-4 pe-2 mb-4">
                                <h1>The Hiring Process</h1>
                                <p>Applicants are hired in their numbers as long
                                    as their application is before the deadline of
                                    the company.</p>
                            </div>
                            <div className="hiring ms-4 pe- mb-4">
                                <h1>The Test Process</h1>
                                <p>Applicants are then put through a number of test
                                    through competions.This process is done to first
                                    reduce the number of candidates as well as
                                    challenge them into bringing out the best in them.</p>
                            </div>
                            <div className="hiring ms-4 pe-2 mb-4">
                                <h1>The Elimination Process</h1>
                                <p>Applicants who dont meet up to the task
                                    requirements / deadlines, get eliminated.
                                    This process continues until we are left
                                    with our desired number / the “Best”</p>
                            </div>
                        </div>

                    </div>

                    <div style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`}
                            styles={buildStyles({
                                // Rotation of path and trail, in number of turns (0-1)
                                rotation: 0.55,

                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',

                                // Text size
                                textSize: '16px',

                                // How long animation takes to go from one percentage to another, in seconds
                                pathTransitionDuration: 0.5,

                                // Can specify path transition in more detail, or remove it entirely
                                // pathTransition: 'none',

                                // Colors
                                pathColor: `rgba(00, 00, 00, ${percentage / 100})`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>

                    <div style={{ width: 200, height: 200 }}>  
                     <CircularProgressbar
                            value={percentage}
                            text={`${percentage1}%`}
                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(62, 152, 199, ${percentage1 / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#d6d6d6',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#f88',
                                    // Text size
                                    fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#3e98c7',
                                },
                            }}
                        />
                         </div>
                </div>
            </section>
        </div>
    )
}

export default Methsec1