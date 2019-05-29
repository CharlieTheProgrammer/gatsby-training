import React, { Component } from 'react'
import Layout from "../components/layout";

// import { Image } from "react-bootstrap";
import Image  from "../components/image-me";


export default class about extends Component {
    render() {
        return (
            <Layout>
                <div className="d-flex flex-column d-sm-block">
                    <h1>About</h1>
                    <Image />
                    <p>Hi, I’m Charlie.<br/><br /> I love learning new things and solving problems. Over the past few years, I’ve fixed everything from cars to software bugs to inefficient business processes.</p>

                    <p>My greatest professional achievements relating to software are my <a href='/portfolio'>TaskTrack.net</a> and <a href='/portfolio'>CreditScale</a> projects. The former is a simple application for keeping track of tasks. The latter is a complex project that converts credit data received from an XML API into a JSON based REST API. You can find out more about these projects on my <a href='/portfolio'>portfolio</a> page.</p>

                    <p>My greatest personal achievements was being the first from my family to graduate from college. Both of my parents immigrated here and did not have the same opportunities to reach their goals. As the eldest child, it’s been tough having to be the first one to do many things. However, this has taught me to be persistent. I’ve realized that meeting goals is about making a plan and never giving up on it.</p>

                    <p>I aspire to become a leader and have been making a serious effort to achieve that goal. I’m currently the lead organizer of the <a href='https://www.meetup.com/freeCodeCamp-Greater-Sacramento-Area/'>freeCodeCamp Greater Sacramento Area</a> Meetup. I host meetups regularly and do at least 1 presentation a month on different technical topics. I also keep an active <a href='/blog'>blog</a> of lessons I’m learning along my journey to mastering programming.</p>

                    <p>I currently live in Sacramento with my lovely partner, Madeline, and our curious cat, Gidget. On weekends, I try different restaurants and explore parts of the city.</p>

                    <p>If you have any questions or are in the Sacramento area and want to meet up, I can be reached via email at <a href="mailto:dev@charlietheprogrammer.com">dev@charlietheprogrammer.com</a>.</p>
                </div>
            </Layout>
        )
    }
}

