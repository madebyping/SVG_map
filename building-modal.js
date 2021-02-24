function getBuilding(id) {

  var redirect_string;
  if (id == "jungle-snake") {
    $("#image_modal").attr("src", "./svgs/jungle.svg");
    $("#heading_modal").text("Jungle");
    $("#heading_modal").css("color","#88ad57");
    $("#description_modal").text("Animal Lover? No, it's still not the place for you. However, fun fact, the snakes and scorpions are novices; your grades will scare you better.");
    $("#myModal").modal();
  }
  else if(id == "aarogya") {
    $("#image_modal").attr("src", "./svgs/aarogya.svg");
    $("#heading_modal").text("Aarogya");
    $("#heading_modal").css("color","#0adff2");
    $("#description_modal").text("Whether you will get complete treatment or not, that's a different issue altogether, but this is mostly the place you will need to visit to get medical leave.");
    $("#myModal").modal();
  }
  else if(id == "amphi") {
    $("#image_modal").attr("src", "./svgs/amphi.svg");
    $("#heading_modal").text("Amphi");
    $("#heading_modal").css("color","#ac9f92");
    $("#description_modal").text("Amphitheatre stages a gamut of cultural and club events along with other fun activities throughout the year, including the Fresher's Night. This is your stage to showcase your talents and try out new stuff in front of an audience maybe. The place to chill after exams, preferably with a coffee and maggi. Just lean back and imagine the pittai.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/Amphi/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "amphi-gallery")
    }
  else if(id == "bakul") {
    $("#image_modal").attr("src", "./svgs/bakul.svg");
    $("#heading_modal").text("Bakul");
    $("#heading_modal").css("color","#83badd");
    $("#description_modal").text("The place where delivery agents ask 'Is this Parijaat?''. It's the boy's hostel, housing around 500 students. Each corridor here is longer than an entire floor of the girl's hostel!");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/Bakul/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "bakul-gallery")
  }
  else if(id == "basketball_field") {
    $("#image_modal").attr("src", "./svgs/bbcourt.svg");
    $("#heading_modal").text("Basketball Court");
    $("#heading_modal").css("color","#e84a59");
    $("#description_modal").text("UNICEF says that this court is colourful enough to be seen from the moon. True story. Okay no. People play basketball here, but strangely, this also serves as a ground for martial arts, photoshoots, dance events, and more.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/Basketball%20Court/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "bbc-gallery")
  }
  else if(id == "bridge") {
    $("#image_modal").attr("src", "./svgs/bridge.svg");
    $("#heading_modal").text("Bridge");
    $("#heading_modal").attr("color","#f3172b");
    $("#description_modal").text("We never knew how much we needed this until we got it. Apart from the time-saving aspect to this shortcut, there's not much else to it. But who doesn't like a bridge!");

    $("#myModal").modal();
  }
  else if(id == "ditch") {
    $("#image_modal").attr("src", "./svgs/ditch.svg");
    $("#heading_modal").text("Ditch");
    $("#heading_modal").css("color","#ece190");
    $("#description_modal").text("Legend says that IIIT once had a lake that you could see from KCIS. Venture there at your own risk.");

    $("#myModal").modal();
  }
  else if(id == "felicity") {
    $("#image_modal").attr("src", "./svgs/felicity.svg");
    $("#heading_modal").text("Felicity");
    $("#heading_modal").css("color","#b59e6f");
    $("#description_modal").text("The ground witnesses the main shows and events of the IIIT-H fest 'Felicity' every year. For those three days, it's the centre of college life. There's a volleyball court, two tennis courts, and a cricket pitch here too.");
    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/felicityground/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "felicityground-gallery")
  }
  else if(id == "garage") {
    $("#image_modal").attr("src", "./svgs/garage.svg");
    $("#heading_modal").text("Garage");
    $("#heading_modal").css("color","#f00f2f");
    $("#description_modal").text("It houses the autonomous car! *Hallelujah* ");

    $("#myModal").modal();
  }
  else if(id == "ground") {
    $("#image_modal").attr("src", "./svgs/ground.svg");
    $("#heading_modal").text("Ground");
    $("#heading_modal").css("color","#b5974b");
    $("#description_modal").text("It's where you'd usually see ~100 UG1 and UG2 students exercising half-heartedly. On brighter days, it's where intense inter-college sports events take place.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/footballground/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "footballground-gallery")
  }
  else if(id == "himalaya") {
    $("#image_modal").attr("src", "./svgs/himalaya.svg");
    $("#heading_modal").text("Himalaya");
    $("#heading_modal").css("color","#28606b");
    $("#description_modal").text("A lot of knowledge and learning is imparted every day in these classrooms and lecture halls. This may also be the place where you sleep the most, not that we endorse such behaviour, obviously.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/Himalaya/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "Himalaya-gallery")
  }
  else if(id == "jc") {
    $("#image_modal").attr("src", "./svgs/jc.svg");
    $("#heading_modal").text("Juice Canteen");
    $("#heading_modal").css("color","#71a9e8");
    $("#description_modal").text("Craving food or just want to have some juice or milkshake to satisfy your palate? Here's the place for you! From enjoying small treats to taking a break from your usual menu, JC has got you covered. Unofficially, this is also the birthday beating spot.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/JC/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "JC-gallery")
  }
  else if(id == "nbh") {
    $("#image_modal").attr("src", "./svgs/nbh.svg");
    $("#heading_modal").text("New Boys Hostel");
    $("#heading_modal").css("color","#e9677a");
    $("#description_modal").text("This massive group of buildings is divided into two sections largely - the new boys' hostel (NBH) and Parijaat: NBH houses graduate students and Parijaat, the girls on campus. The most exciting thing here is the set of messes embedded into the building. Kadamba and Yukthahar are the most populated and least populated buildings on campus, respectively (talk about keeping things balanced). This building is also home to the famed Biryani Line™.");

    $("#myModal").modal();
  }
  else if(id == "nilgiri") {
    $("#image_modal").attr("src", "./svgs/nilgiri.svg");
    $("#heading_modal").text("Nilgiri");
    $("#heading_modal").css("color","#a3a3a2");
    $("#description_modal").text("This is one of IIIT's oldest buildings - back from when IIIT was a government office. You'll find a few student labs, storage rooms, and more.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/nilgiri/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "nilgiri-gallery")
  }
  else if(id == "obh") {
    $("#image_modal").attr("src", "./svgs/obh.svg");
    $("#heading_modal").text("OBH");
    $("#heading_modal").css("color","#e78a86");
    $("#description_modal").text("*Cue ominous music and dark mood lighting* This is the old boy's hostel - home to most of IIIT's UG4+ students. Like NBH, OBH has two messes - north and south. Dishes of note: The bhatura that makes you run out of class 5 minutes early and the dosa that is paper-thin.");

    $("#myModal").modal();
  }
  else if(id == "photobooth") {
    $("#image_modal").attr("src", "./svgs/photobooth.svg");
    $("#heading_modal").text("T Hub");
    $("#heading_modal").css("color","#cd4153");
    $("#description_modal").text("T-Hub is the poster building that you'll find on many Facebook profiles. Home to a giant startup incubator, its buzzing with innovation. It's open to students and is a treat for sore eyes. Contains pool tables, vending machines, slides, and more. T-Hub would be the ideal student destination if it weren't for the meaningful work being done there. ");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/THUB/2.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "THUB-gallery")
  }
  else if(id == "quarters") {
    $("#image_modal").attr("src", "./svgs/quarters.svg");
    $("#heading_modal").text("Quarters");
    $("#heading_modal").css("color","#cde5de");
    $("#description_modal").text("Due to legal reasons, we cannot comment on this - students are not permitted to visit this area. We imagine that they have golden pools and water fountains. Hououin katnisseverdeen Kyouma");

    $("#myModal").modal();
  }
  else if(id == "thub") {
    $("#image_modal").attr("src", "./svgs/admin.svg");
    $("#heading_modal").text("KCIS & Admin Office");
    $("#heading_modal").css("color","#ed0ce9");
    $("#description_modal").text("KCIS is home to some of IIIT's biggest labs. It's a powerhouse that specializes in deep learning based research. Students happen to like KCIS because of the air-conditioned rooms and well-kept furniture as well. Adjacent to KCIS is the admin office, for all your logistical needs.");

    $("#myModal").modal();
  }
  else if(id == "vindhya") {
    $("#image_modal").attr("src", "./svgs/vindhya.svg");
    $("#heading_modal").text("Vindhya");
    $("#heading_modal").css("color","#e9e0c9");
    $("#description_modal").text("Visiting the library or the workspaces is a cakewalk, but if you decide to explore it all at once, be ready to be lost in it, literally. A fun exercise for when you visit: wait till midnight when the doors are locked and find a way out of Vindhya. It's also the second half of IIIT's research story- home to a plethora of labs, spanning entire corridors. CIE, one of India's largest startup incubator is also housed here.");

    $("#myModal").modal();
    document.getElementById("gallery_link").style.display = "block";
    $("#gallery_link").attr("href", "/gallery/Vindhya/0.jpg");
    document.getElementById("gallery_link").setAttribute("data-gallery", "Vindhya-gallery")
  }
}
