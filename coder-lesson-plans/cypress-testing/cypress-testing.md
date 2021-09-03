# Cypress testing - script

## Intro

All the unit tests we've been writing are really valuable and important, as they confirm that the individual pieces of our code perform correctly.
But we still need to test the whole app, and see if it works when all those pieces come together.
Doing this manually can be very time consuming, repetive, and tedious.
But there is a better way.
We can write automation scripts, which will control the browser for us.
There are several different tools out there which can do this, and the one we'll be using today is called Cypress.

## Caveats etc

But before we start, one thing to be aware of is that writing these automation scripts can be quite a tedious and tiem consuming process.
They also tend to be quite fragile, and difficult to refactor.
So generally in industry, this kind of test is only written for mature features, which aren't expected to change very often.
This way, when we build a new feature, we can run these scripts to check that our new feature didn't break our old one.

## Install and get started
