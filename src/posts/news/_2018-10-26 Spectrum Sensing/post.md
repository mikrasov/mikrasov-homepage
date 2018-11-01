---
title: "Spectrum Sensing Project"
featuredImage: "./featured-image.jpg"
---

As part of my research I spent the weekend doing spectrum sensing of Cellular LTE bands and [TV White Spaces](https://www.fcc.gov/general/white-space) with [Esther Showalter](https://moment.cs.ucsb.edu/people/esther-showalter). For this work we partnered with [TDV](http://tdvnet.com/) to visit the [Iiapay Nation of Santa Ysabel](http://www.iipaynation-nsn.com/) and the [Campo Kumeyaay Nation](http://www.campo-nsn.gov/) in order to understand LTE coverage and possibility of establishing new TVWS links.

In simple terms what we are trying to do is put together a system for verifying cellular coverage and tools for planning and deploying wireless networks over newly available spectrum.

In order to conduct scans we use a a piece of hardware called a [software defined radio](https://en.wikipedia.org/wiki/Software-defined_radio), in this case a [Ettus Research USRP](https://www.ettus.com/product). To run it you can use an open source toolkit called [GNU Radio](https://www.gnuradio.org/). From there we scan through a list of carrier frequencies recording the *dBm* (decibel-milliwatts). We pair the laptop with a GPS and tag each capture with the time and GPS cordinates we recorded them at. Each frequency takes about ~2 seconds to scan.

The scannng itself is a simple matter of driving around, but finding the right frequencies is a more difficult matter. Where the TVWS bands are [well defined](https://en.wikipedia.org/wiki/North_American_television_frequencies) with the pilot frequency at .31 MHz from the lower edge. On the other hand LTE frequencies can occur anywhere on the the LTE bands 