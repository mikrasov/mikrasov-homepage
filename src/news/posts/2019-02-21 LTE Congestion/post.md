---
title: "LTE Congestion Monitoring in LA"
featuredImage: "./featured-image.jpg"
---

<div class="img-right"><img src="./featured-image.jpg" alt="LTE Passive Monitoring Setup"></div>

To continue talking about what it is we do in academic wireless research, I wanted to share our work on LTE congestion sensing. For this I am working with [Vivek Adarsh](https://moment.cs.ucsb.edu/people/vivek-adarsh) who is the lead on the project.

Ideally cellular infrastructure (the set of towers and networks that let you talk on your phone and browse reddit) is well provisioned for everyday use (there is enough computing power and bandwidth to accommodate normal load). However this assumptions fails in rural areas where there might not be enough cost incentive (paying customers). Similarly, in a situation of unusual activity such as a large event (parade, sports gathering, etc) the planned capacity might be insufficient for the larger volume of cellular utilization. Likewise, during infrastructure failure, for example as a result from a natural disaster, remaining cellular towers would have to redistribute a load beyond their capacity.

When load exceeded capacity, the local cellular network is called congested. As a response the local tower will take measure to service those as best as it can (steps that can include barring lower priority clients, and/or rejecting new connections). While the cellular providers can internally detect when this type of behavior occurs, those outside the network have to take steps to infer congestion. 

For example suppose you were working for the FCC and wanted to independently verify that people in a rural region were adequately served by the local telecoms. Could you get that information from observing cellular traffic?

Turns out yes you can. In our project we are using a a [Ettus Research USRP](https://www.ettus.com/product) in order to passively listen in on cellular broadcasts. We do this during a time of high activity and compare it to a baseline of usual activity. In the broadcasts we can't see most of the messages as they are encrypted and directed to specific mobile devices. Instead we look at all the unencrypted information sent by the towers themselves. This includes messages that accept and reject cellular connections. We use this type of information to estimate the level of congestion on the network.

For this work we need areas of unusually high cellular activity. This week Vivek and I travelled to the Los Angeles Staples Center to collect cellular traces for a Lakers game. As glamorous as that sounds, the end result is us sitting in a Starbucks for hours while our gear collects logs from the nearby cell towers.


<div class="img-right"><img src="./setup.jpg" alt="Expiremental Setup"></div>

We had two computers collecting logs (each for 8 towers), while we worked on the intro and background sections on the corresponding paper for this work. We got more than a few glances and good bursts of conversation with Starbucks patrons. We came back with 1TB of data that we are crunching now. 

**Update**: When we crunched the numbers we found that actually there was no detectable congestion. We hypothesize that this is because dedicated event venues (like stadiums) are adequately provisioned for a large influence of people. Good news for users, bad news for our paper. We will have to look for congestion elsewhere.

**Update 2**: We ended up finding some a month later in [San Diego during Saint Patrick's Day](/posts/2019-03-16-sd-congestion/)  