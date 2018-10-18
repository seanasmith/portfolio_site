/*
================================================================================


                            ©2018 Sean A. Smith
                     Graduate Student, Texas State Univ.
                            sasmith@txstate.edu


================================================================================
*/




// // // // // // // // //



/*
================================================
            smooth scroll to sections
================================================
*/


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // clicked hash link should have value
    if (this.hash !== "") {
      // Prevent default link click behavior
      event.preventDefault();

      // get hash value
      var hash = this.hash;

      // animate for smooth scroll to clicked link
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
      });
    } // End if
  });
});


/*
=========================================
        contact link hover expansion
=========================================
*/


//On mouseover, change a text to section label
$('.contact-module a').on('mouseover', function() {
  var newMenu = $(this).attr('label');
  $(this).text(newMenu);
});

//remove section label on mouseout
$('.contact-module a').on('mouseout', function() {
  var newMenu = $(this).attr('original');
  $(this).text(newMenu);
});



/*
=========================================
       work link hover expansion
=========================================
*/


//On mouseover, change a text to section label
$('.work-thumb h2').on('mouseover', function() {
  var newMenu = $(this).attr('content');
  $(this).text(newMenu);
});

//remove section label on mouseout
$('.work-thumb h2').on('mouseout', function() {
  var newMenu = $(this).attr('original');
  $(this).text(newMenu);
});


/*
=========================================
          work content changer
=========================================
*/



//run function to change info content depending on list item label

$('#work-section ul li a').on('mouseover', function () {

  //get label from each work list item

  var project = $(this).attr('label');

//if, else if for each different items
  if (project == 'anx') {

    //Genre
    $('#work-genre span').html('<p>Interactive feature</p>');

    //Platform
    $('#work-platform span').html('<p>HTML, CSS and jQuery</p>');

    //Date
    $('#work-date span').html('<p>May 2018</p>');

    //info
    $('#work-info span').html('<p>Mental health disorders are on the rise. Whether they&apos;re actually occuring more frequently or being reported at higher rates, the way we talk about and seek help for mental health issues is changing</p><p>This project is a series of three feature stories of current or former students at Texas State University who have struggled with mental health. It features original reporting, photography and design. Currently only formatted for desktop.</p>');

  } else if (project == 'apd') {

    //Genre
    $('#work-genre span').html('<p>Data Journalism</p>');

    //Platform
    $('#work-platform span').html('<p>HTML, CSS, plotly.js and jQuery</p>');

    //Date
    $('#work-date span').html('<p>April 2018</p>');

    //info
    $('#work-info span').html('<p>This project looks at data from all officer-involved shootings by the Austin Police Department from 2000 - 2014. Readers can explore the data using several variables.</p><p>Further, each incident is mapped, revealing one unique case &mdash; an incident in a neighboring county. The piece explores the story behind that outlier.</p>');

  } else if (project == 'aipp') {

    //Genre
    $('#work-genre span').html('<p>Data Journalism</p>');

    //Platform
    $('#work-platform span').html('<p>HTML, CSS, Google Charts API and jQuery</p>');

    //Date
    $('#work-date span').html('<p>July 2018 - current</p>');

    //info
    $('#work-info span').html('<p>Using public data from the city of Austin, myself and coauthor Alexandra White are documenting public art around the city, telling the stories of the artists behind them and dive into how the city supports the program. Currently, the project features one artist, tells the history of public art in Austin and provides a map and filter table for the art pieces.</p><p>*<i>Work in progress</i>');

  } else if (project == 'cuesa') {

    //Genre
    $('#work-genre span').html('<p>Interactive Map</p>');

    //Platform
    $('#work-platform span').html('<p>HTML, CSS, JavaScript and Adobe Illustrator</p>');

    //Date
    $('#work-date span').html('<p>March 2018</p>');

    //info
    $('#work-info span').html('<p>An interactive map on desktop or a filterable table on mobile for a guide to American barbecue. This project uses unstructured data to load new info when a new location is selected.</p>');

  } else if (project == 'sxtx') {

    //Genre
    $('#work-genre span').html('<p>Web Development and logo design</p>');

    //Platform
    $('#work-platform span').html('<p>Wordpress, Adobe Illustrator</p>');

    //Date
    $('#work-date span').html('<p>Feb - March 2018</p>');

    //info
    $('#work-info span').html('<p>I was part of the web team for the annual SXTXState project, where graduate students run a digital publication covering the South by Southwest Interactive. Other teams include editorial, social media and video production.</p><p>I led efforts in the aesthetic redesign of the site and assisted in the functionality redesign, including the creation of a new logo and revamp of the Wordpress site.</p>');

  } else if (project == 'tejas') {

    //Genre
    $('#work-genre span').html('<p>Multimedia Journalism</p>');

    //Platform
    $('#work-platform span').html('<p>Wordpress</p>');

    //Date
    $('#work-date span').html('<p>December 2017</p>');

    //info
    $('#work-info span').html('<p>An original reporting piece featuring <i>Texas Monthly&apos;s</i> no. 6 barbecue joint in its 2017 top 50 list. </p>');

  } else if (project == 'webpub') {

    //Genre
    $('#work-genre span').html('<p>Teaching</p>');

    //Platform
    $('#work-platform span').html('<p>Classroom, website</p>');

    //Date
    $('#work-date span').html('<p>Jan. 2018 - current</p>');

    //info
    $('#work-info span').html('<p>I started teaching a section of Web Design and Publishing beginning in the Spring 2018 semester and continued to do so in the subsequent fall. Students start learning the basics of HTML and CSS before learning CSS framework Bootstrap and then manage a self-hosted WordPress account. Project focus on portfolio building, user research, web and multimedia journalism and web-based PR.</p>');

  } else if (project == 'twitter') {

    //Genre
    $('#work-genre span').html('<p>Scholarly Research</p>');

    //Platform
    $('#work-platform span').html('<p>Twitter, Microsoft Excel, APA formatting, research writing</p>');

    //Date
    $('#work-date span').html('<p>May 2015 - May 2017</p>');

    //info
    $('#work-info span').html('<p>I am second author of the publication <i>Mudslinging on Twitter During the 2014 Election</i>, where I coded more than 30,000 tweets from candidated running for the House and Senate. I also contributed to the literature review and discussion sections of the final written article.</p>');

  };

});


$('#work-section ul li a').on('mouseout', function () {

  $('#work-description span').html('<p>...</p>');

});



/*
=========================================
     nav appear on hamburger click
=========================================
*/

$('#menu').on('click', function () {
  $('#menu').html('');
  $('nav').css('display', 'block');
});

$('nav').on('click', function () {
  $('#menu').html('<div></div>');
  $('nav').css('display', 'none');
});

$('#menu').on('mouseover', function () {
  $('#menu div').css('background-color', '#FFDB58');
});

$('#menu').on('mouseout', function () {
  $('#menu div').css('background-color', '#0E1A24');
});
