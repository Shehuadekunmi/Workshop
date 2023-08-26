import React from 'react'
import union from '../assets/Union.png'
import union1 from '../assets/Union1.png'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Methsec1 = () => {
    const num = 33;
    const percentage1 = 66;
    const percentage2 = 100

    return (
        <div>
            <h1 className='process px-2 ps-md-5'>Selection Process</h1>

            <section className="circle px-2 bg-white p-5">
                <p className='ps-md-5'>There are three various steps in this stage, and they are as follow:</p>
                <div className="line ps-2 ">

                    <div className='d-flex'>
                        <div className='ms-md-5'><img src={union} alt="" /></div>
                        <div className='car'>
                            <div className=" justify-content-around ms-4 pe-2 mb-4 d-md-flex">
                                <div className="hiring ms-4 pe-2 mb-4  text-center"> <h1>The Hiring Process</h1>
                                    <p>Applicants are hired in their numbers as long
                                        as their application is before the deadline of
                                        the company.</p>
                                </div>
                                <div className='mob' style={{ width: 200, height: 200 }}>
                                    <CircularProgressbar value={num} text={num}
                                        styles={buildStyles({
                                            rotation: 0.55,
                                            strokeLinecap: 'butt',
                                            textSize: '16px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(00, 00, 00, ${num} )`,
                                            textColor: '#292D32',
                                            trailColor: '#c4c4c4',
                                            backgroundColor: '#292D32',
                                        })}
                                    />
                                </div>
                            </div>
                            <div className=" d-md-flex justify-content-around ms-4 pe- mb-4">
                                <div className="hiring ms-4 pe- mb-4 text-center" > <h1>The Test Process</h1>
                                    <p>Applicants are then put through a number of test
                                        through competions.This process is done to first
                                        reduce the number of candidates as well as
                                        challenge them into bringing out the best in them.</p>
                                </div>
                                <div className='mob ' style={{ width: 200, height: 200 }}>
                                    <CircularProgressbar value={percentage1} text={`${percentage1}%`}
                                        styles={buildStyles({
                                            rotation: 0.55,
                                            strokeLinecap: 'butt',
                                            textSize: '16px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(00, 00, 00, ${percentage1} )`,
                                            textColor: '#292D32',
                                            trailColor: '#c4c4c4',
                                            backgroundColor: '#292D32',
                                        })}
                                    />
                                </div>
                            </div>
                            <div className=" d-md-flex justify-content-around ms-4 pe- mb-4" >
                              <div className="hiring ms-4 pe-2 mb-4 text-center"> <h1>The Elimination Process</h1>
                                    <p>Applicants who dont meet up to the task
                                    requirements / deadlines, get eliminated.
                                    This process continues until we are left
                                    with our desired number / the “Best”</p>
                                 </div> 

                                 <div className='mob' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage2} text={`${percentage2}%`}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${percentage2} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>
                            </div>
                        </div>

                    </div>

                    <div className='des text-center ms-5' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={num} text={num}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${num} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>

                    <div className='des text-center ms-5 my-4' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage1} text={`${percentage1}%`}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${percentage1} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>


                    <div className='des text-center ms-5' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage2} text={`${percentage2}%`}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${percentage2} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>
                </div>
            </section>


            
            {/* what happen after section */}

            <h1 className='process px-2 ps-md-5 w-100'>What Happens After Selection</h1>

<section className="circle px-2 bg-white p-5 ">
    <p className='ps-md-5'>There are two various steps in this stage, and they are as follow:</p>
    <div className="line ps-2 my-lg-5">

        <div className='d-flex'>
            <div className='ms-md-5'><img src={union1} alt="" /></div>
            <div className='car'>
                <div className=" justify-content-around ms-4 pe-2 mb-4 d-md-flex">
                    <div className="hiring ms-4 pe-2 mb-4  text-center"> <h1>The Victorious</h1>
                        <p>Applicants who have emerges victorious are then
                            merged into teams of competent individuals.</p>
                    </div>
                    <div className='mob' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={num} text={num}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${num} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>
                </div>
                <div className=" d-md-flex justify-content-around ms-4 pe- mb-4">
                    <div className="hiring ms-4 pe- mb-4 text-center" > <h1>The Team Work</h1>
                        <p>Once merged into tams, the team are then 
                            assigned projects to work on as well recieve 
                            guidiance into turning such project into reality.</p>
                    </div>
                    <div className='mob ' style={{ width: 200, height: 200 }}>
                        <CircularProgressbar value={percentage1} text={`${percentage1}%`}
                            styles={buildStyles({
                                rotation: 0.55,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(00, 00, 00, ${percentage1} )`,
                                textColor: '#292D32',
                                trailColor: '#c4c4c4',
                                backgroundColor: '#292D32',
                            })}
                        />
                    </div>
                </div>
            </div>

        </div>

        <div className='des text-center ms-5' style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={num} text={num}
                styles={buildStyles({
                    rotation: 0.55,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(00, 00, 00, ${num} )`,
                    textColor: '#292D32',
                    trailColor: '#c4c4c4',
                    backgroundColor: '#292D32',
                })}
            />
        </div>

        <div className='des text-center ms-5 my-4' style={{ width: 200, height: 200 }}>
            <CircularProgressbar value={percentage1} text={`${percentage1}%`}
                styles={buildStyles({
                    rotation: 0.55,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(00, 00, 00, ${percentage1} )`,
                    textColor: '#292D32',
                    trailColor: '#c4c4c4',
                    backgroundColor: '#292D32',
                })}
            />
        </div>

    </div>
</section>


        </div>
    )
}

export default Methsec1