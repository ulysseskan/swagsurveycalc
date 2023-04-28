<!-- ABOUT THE PROJECT -->
## tl;dr
Browser extension that calculates the hourly wage Swagbucks pays you for taking surveys,
highlighting the survey that pays the most.

## About

Prodege's Swagbucks site offers money for taking surveys.  They usually pay you less than half the United States
minimum wage.  Occasionally higher paid surveys pop up, for example, $20/hour,
$30/hour, and beyond.

The problem is, they don't show you the hourly wage.  And the survey order is usually random.  They
show you an amount you get paid in "Swagbucks", and an approximate time it takes to complete the
survey.

If you know how much 1 Swagbuck is equal to (usually 1 SB = .01 USD), you can calculate the hourly
wage and see if it's worth spending time on.  This extension does this job automatically for you for each
survey row, adding a new **Hourly Wage column** to the surveys page, and **highlights the top paid survey
in green**, like so:

<img src="https://github.com/ulysseskan/swagsurveycalc/blob/main/swagsurvey-extension-screenshot.png">

<!-- GETTING STARTED -->
## Getting Started

1. ```git clone https://github.com/ulysseskan/swagsurveycalc.git```
2. Open Browser > Settings > Extensions > Toggle `Developer mode`
3. Click Load unpacked, and select the swagsurveycalc folder, then go to the Swagbucks survey page

### Prerequisites

* You must be using a Chromium-based browser (Chrome, Brave, etc.)
* You must be logged into the Swagbucks site, be on the surveys page, and be using a laptop/desktop

### Privacy

This program executes solely in your browser, and only on the Swagbucks survey page.  It sends no
information to anyone or any server.  All it does is add one column to the Swagbucks survey selector
page and highlights part of it, similar to adding a column in a spreadsheet.  It's open source and
you are free to inspect the code (it's around 50 lines and fairly readable)

## Known Bugs

- [ ] Once in a while, Swagbucks will load extended surveys 5-10 seconds after the main list of
surveys.  This extension does not currently account for these additional surveys.  This could
be fixed by using the MutationObserver API to watch for rare extendedSurvey nodes.  This would
have a small performance impact and bloat the code a bit, so I'm not going to do it unless
there's a lot of actual demand.
- [ ] Swagbucks added a new preference that shows SB per minute.  If this pref is enabled,
the hourly wage calculation is incorrect.  I plan to fix this.

## Potential Improvements

- [ ] Figure out how to include the sponsoring survey company as an additional column (not sure this
  is possible without "clicking" the survey URL which would be bad)
- [ ] Allow users to specify what 1 SB is equal to in their country's currency
- [ ] Add an icon
- [ ] Pack & publish to Chrome web store for easier installation/updates
- [ ] Add a version for Safari (which would also work on Mobile Safari)

## Payment

This is a free browser extension, with no ads.  If you find this useful and really want to
compensate me, let me know.

## Support

I offer no support for using this extension.

## Legal

I am in no way affiliated with Prodege and/or Swagbucks.  This extension and all associated code
is offered "as is".

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Project Link: [https://github.com/ulysseskan/swagsurveycalc](https://github.com/ulysseskan/swagsurveycalc)

## Acknowledgments

* OpenAI's ChatGPT software for help bringing this idea to life and for help debugging it.
