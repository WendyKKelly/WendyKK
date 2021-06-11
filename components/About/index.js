
import React, { useRef, useState } from 'react';
import Container from '../container'
import Link from 'next/link'



export default function About() {
    return (
<Container>
        <div className="max-w-2xl mx-auto">
<h2 className="text-7xl text-center"> Wendy Kiana Kelly</h2>
<h3 className="text-5xl text-center">Writer, Frontend Developer, Advocate.</h3>
<p>Hi, I'm Wendy. </p> <p>I'm a mom, definitely. A brewer's wife, certainly. An advocate, essentially.</p>
<p>Perhaps my first love is people. You could say I love people so much that sometimes I get too caught up in activism and then need some time away to regroup.</p>
<p>I have spent my adult years attempting to have a career in the spaces between my life.</p>
<p>And now, at the exact time where I thought I would begin to focus on career, my life took another fascinating turn.</p>
<p>Our youngest child, still a teen, needs me. They have been given a diagnosis that requires me to be caretaker and earn money for the therapy and medication. It's an interesting problem to solve.</p>

<h3 className="text-5xl text-center"> What Next?</h3>
<p>Well, I am not sure.</p>
<p>Over the last couple years, I had been consolidating my interests into a project called Underbelly. It's grown to include a weekly Monday morning newsletter, a podcast, a blog, a few courses, and a book in the making.</p>
<p>Underbelly focuses on learning to love the least loveable parts of you so that you can gor forth and fully love the hard to love parts in others. The idea is that as we get better at this, everyone wins. I love this project and love spending time in it. I welcome support either through <Link href="https://www.patreon.com/wildandprecious">
        <a className="hover:bg-yellow">Patreon</a>
      </Link> for the podcast, through a paid subscription to the <Link href="https://www.getrevue.co/profile/underbelli/members">
        <a className="hover:bg-yellow">extended, daily newsletter</a>
      </Link> or other offerings as I grow this project out.</p>
<p>I've also been learning front end development and fooling around with design. I have made my way through lots of courses and through projects. Slowly, these should show up here. <Link href="https://github.com/WendyKKelly">
        <a className="hover:bg-yellow">At the moment, everything is on github,</a>
      </Link> but frankly it's a bit of a mess.</p>
      <h3 className="text-5xl text-center"> The Idea (It's Not New)</h3>
      <p>100 beers.</p>
      <p>It's simple: I stumbled upon a project called 50 Coffees and I thought, "perfect!"</p>
      <p>The 50 coffees project is where<Link href="https://www.fiftycoffees.com/the-project">
        <a className="hover:bg-yellow"> this lovely-sounding New Yorker </a></Link>is spending 50 coffee dates trying to figure out what she will do next. She cites several previous examples. It looks like I am just taking a rather old idea and putting a slight twist on it.</p>
      
      <p>Here's the twist: We both know deeply thoughtful, intelligent, heart-centered, fascinating people.</p>
      <p>And, while it appears that we both enjoy coffee, I am a brewer's wife.</p>
      <p>I'll blog the conversations and possibly podcast them. Hell, they may end up on YouTube.</p>
      <p>In my podcast, <Link href="https://underbel.li/blog/bpage/wild-and-precious-conversations">
        <a className="hover:bg-yellow">Wild and Precious Conversations,</a></Link> we talk about how to love yourself and others better. How to move through grief, how to live at peace, how to find joy.</p>
        <h3 className="text-5xl text-center">What & How?</h3>
        <p>100 Beers will tackle: What in the heck should I do to best support my teenager in their diagnosis and how should I do this?</p>
        <p>My situation is sticky and challenging. But it's a problem many of us share. We are the caregivers — for young people, old people, our spouses.</p>
        <p>I'd like to advocate for caregivers and find ways that we can better care for those with what I guess I might call "scary diagnoses"</p>
        <p>I'll be asking people to meet me in person at small breweries as well as joining me virtually — as that is definitely something I am pretty used to these days.</p>
        <p>Looking forward to sharing space and time with you and some of my favorite thought leaders, spiritual leaders, fellow caregivers, and just people I admire and respect.</p>
        <p> If you'd like to join me along the way, welcome! </p>
        <p>And if you'd like to buy me a beer — feel free. No obligation, I am looking forward to freely gathering and sharing our collective wisdom. But if you would like to, here is the link to <Link href="https://www.buymeacoffee.com/wendykkelly">
        <a className="hover:bg-yellow">Buy Me A Beer.</a></Link></p>
            </div>
            </Container>
    );
}