
$(document).ready(() => {
  
  let paragraph = '.destination-description-paragraph';
  let title = '.destination-description-title';
  let distance = '.destination-description-info-1';
  let days = '.destination-description-info-2';

  $('#moon').addClass('button-select');
  $(paragraph).html('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.').addClass('hidden');
  $(title).html('moon').addClass('hidden');
  $(distance).html('avg. distance <span>384,400km</span>').addClass('hidden');
  $(days).html('est. travel time <span>3 days</span>').addClass('hidden');
  $('.destination-space').find('img').attr('src', '../assets/destination/image-moon.webp');

  
  $("#moon").click(e => { 
    $('*').removeClass('hidden');
    $('button').removeClass('button-select');
    $('#moon').addClass('button-select');

    setTimeout(() => {
      $(paragraph).html('See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.').addClass('hidden');
      $(title).html('moon').addClass('hidden');
      $(distance).html('avg. distance <span>384,400km</span>').addClass('hidden');
      $(days).html('est. travel time <span>3 days</span>').addClass('hidden');
    }, 50);
    $('.destination-space').find('img').attr('src', '../assets/destination/image-moon.webp');
  });

  $("#mars").click(e => { 
    $('*').removeClass('hidden');
    $('button').removeClass('button-select');
    $('#mars').addClass('button-select');
    setTimeout(() => {
      $(paragraph).html('Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!').addClass('hidden');
      $(title).html('mars').addClass('hidden');
      $(distance).html('avg. distance <span>225 mil km</span>').addClass('hidden');
      $(days).html('est. travel time <span>9 months</span>').addClass('hidden');
    }, 50);
    $('.destination-space').find('img').attr('src', '../assets/destination/image-mars.webp');

  });

  $("#europa").click(e => { 
    $('*').removeClass('hidden');
    $('button').removeClass('button-select');
    $('#europa').addClass('button-select');

    setTimeout(() => {
      $(paragraph).html('The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.').addClass('hidden');
      $(title).html('europa').addClass('hidden');
      $(distance).html('avg. distance <span>628 mil km</span>').addClass('hidden');
      $(days).html('est. travel time <span>3 years</span>').addClass('hidden');  
    }, 50);

      $('.destination-space').find('img').attr('src', '../assets/destination/image-europa.webp')
  });

  $("#titan").click(e => { 
    $('*').removeClass('hidden');
    $('button').removeClass('button-select');
    $('#titan').addClass('button-select');
    setTimeout(() => {
      $(paragraph).html('The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.').addClass('hidden');  
      $(title).html('titan').addClass('hidden');  
      $(distance).html('avg. distance <span>1.6 bil. km</span>').addClass('hidden');  
      $(days).html('est. travel time <span>7 years</span>').addClass('hidden');  
    }, 50);

    $('.destination-space').find('img').attr('src', '../assets/destination/image-titan.webp');
  });
});
