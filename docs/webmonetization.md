---
id: webmonetization
title: What is web monetization?
sidebar_label: What is web monetization?
---

## Support for web monetization in Mural

Mural 2 introduces support for content monetization in two ways: Through the web monetization protocol as implemented by the Coil payments service, and through an access code that can be shared by the creator through services such as Patreon or KoFi. Creators can use either of these methods, or both.

There are several components that play a part in automatic payments to content creators, and each of them is necessary. Users have to have payments enabled using Coil, and content creators have to have a way to receive the payments using an online wallet.

We explain how to set up your [Payment menu](./payments.md) in Mural 2 here.

## About the web monetization protocol

The web monetization protocol has been proposed as a standard to the W3C for small-value payments for web content. Payments are made via the web monetization protocol in a cryptocurrency called XRP.

In order to receive payments via the web monetization protocol, creators must have an ILP-enabled wallet where the payment can be sent. ILP is short for the Interledger Protocol, and currently there are two services which let you have an ILP payment pointer: Uphold and Gatehub.

### Streaming payments through Coil

Coil subscribers use the web monetization protocol to stream micropayments to content creators. Coil users create an account and install a browser extension that stores value - Coil users pay USD $5 per month, which they stream to content creators automatically when they visit a monetization-enabled web page. Coil currently pays content creators at a rate of USD $0.34 per hour, paid in the XRP cryptocurrency. When a Coil user visits a web monetization-enabled page, their browser extension displays a green dot and the page provides a visual indication that the page is receiving payments from the user.

### Receiving payments using the Uphold service

[Uphold](https://uphold./en-gb) is an online wallet service that stores cryptocurrency for users. You can set up an Uphold account to receive payments in XRP.

Once you’ve set up an Uphold account, you can start receiving payments in XRP. In order for people to send you payments, you have to know your Interledger payment pointer address (sometimes called an ILP). An Interledger payment pointer is similar to a bank account number - it’s something you can share publicly to receive payments.

In Uphold, you can find your Interledger payment pointer address by clicking on your XRP account in the three dots menu in the center column in the upper right corner.

### Receiving payments using the Gatehub service

[Gatehub](https://www.gatehub.net) has a good explainer of [how to get set up to receive payments via XRP](https://support.gatehub.net/hc/en-us/articles/360019507633-Interledger-deposit-via-Coil)
