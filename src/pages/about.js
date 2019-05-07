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
                    <p>Hi, I’m Charlie.<br/><br /> I love learning new things and solving problems. Over the past few years, I’ve fixed everything from cars to bug in software to inefficient business processes. I just can’t help myself. </p>

                    <p>My greatest professional achievements relating to software are my TaskTrack.net and CreditScale projects. The former is a simple application for keeping track of tasks. The latter is a more complex project that converts data received from an XML API into a JSON based REST API. You can find out more about these projects on my portfolio page.</p>

                    <p>My greatest personal achievements was being among the first from my family to graduate from college. Both of my parents immigrated here and did not have the same opportunities to reach their goals. As the eldest child, it’s been tough having to be the first one to do many things. However, this has taught me to be persistence. I’ve realized that meeting goals is about making a plan and never giving up on it.</p>

                    <p>I aspire to become a leader and have recently been making a serious effort to achieve that goal. I’m an organizer on FreeCodeCamp Sacramento and host meetups at least twice a month and do at least 1 presentation a month on different technical topics. I also keep an active blog of lessons I’m learning along my journey to mastering programming.</p>

                    <p>I currently live in Sacramento with my lovely partner, Madeline, and our curious cat, Gidget. On weekends, I check out different restaurants and explore different parts of the city. </p>

                    <p>If you have any questions or are in the Sacramento area and want to meet up, I can be reached vie email at dev@charlietheprogrammer.com</p>
                </div>
            </Layout>
        )
    }
}

