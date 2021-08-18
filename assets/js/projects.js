//Change content of div/paragraph under each menu option:
document.getElementById("projects").addEventListener("click", projects);
// Function to change text displayed depending on which option use has clicked:
function projects() {
    document.getElementById('menu-text').innerHTML=`
<div class="container-fluid" id="menu-content">
  <div id="existing-projects">
    <h3 class="centered">A selection of the thousands of projects we have been involved in</h3>
    <p class="centered">Please click a project image for more information and a slideshow of some of the images of the project</p>
    <div class="row">
      <div class="col-md">
        <div id="project1">
          <img onclick="projectInfo1()" src="assets/images/projects/magistrates/em02.jpg" class="project-main-image" alt="Ex. Magistrates Court, Caerphilly">
          <h3 class="centered">Ex. Magistrates Court, Caerphilly</h3>
        </div>
      </div>
      <div class="col-md">
        <div id="project2">
          <img onclick="projectInfo2()" src="assets/images/projects/archbishop/ab07.jpg" class="project-main-image" alt="Ex. Archbishop McGrath School, Brynmenyn">
          <h3 class="centered">Ex. Archbishop McGrath School, Brynmenyn</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div id="project3">
          <img onclick="projectInfo3()" src="assets/images/projects/durham/dh05.jpg" class="project-main-image" alt="Durham Road Build">
          <h3 class="centered">Durham Road Build, Newport</h3>
        </div>
      </div>
      <div class="col-md">
        <div id="project4">
          <img onclick="projectInfo4()" src="assets/images/projects/merthyr/me04.jpg" class="project-main-image" alt="Merthyr Street Build">
          <h3 class="centered">Merthyr Street Build, Barry</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md">
        <div  id="project5">
          <img onclick="projectInfo5()" src="assets/images/projects/harrison/ha03.jpg" class="project-main-image" alt="Ex. Blue Dragon Hotel, Newport Road">
          <h3 class="centered">Harrison Drive Build, Cardiff</h3>
          </div>
      </div>
      <div class="col-md">
        <div  id="project6">
          <img onclick="projectInfo6()" src="assets/images/projects/lanelay/la05.jpg" class="project-main-image" alt="Lanelay Road, Talbot Green">
          <h3 class="centered">Lanelay Road Build, Llantrisant</h3>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
  }
  function projectInfo1() {
      projects(); // closes all opened extra content
      document.getElementById("project1").innerHTML = `
<div id="carouselExampleCaptions1" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/magistrates/em01.jpg" class="project-main-image d-block w-75" alt="Ex. Magistrates Court, Caerphilly">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/magistrates/em02.jpg" class="project-main-image d-block w-75" alt="IMAGE">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/magistrates/em03.jpg" class="project-main-image d-block w-75" alt="...">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions1" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions1" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Ex. Magistrates Court, Caerphilly</h3>
  <ul>
    <li>
      Location: Off Mountain Road, Caerphilly
    </li>
    <li>
      Main Contractor: Jehu
    </li>
    <li>
      Client: Linc-Cymru Housing Association
    </li>
  </ul>
  <p>A 34 unit apartment block and associated housing on the site of the former Magistrates Court, Mountain Road, Caerphilly.</p>
  <p>A challenging passivhaus project which incorporated loadbearing masonry and intricate detailing to accommodate the architectural design.</p>
  <p>As the development is located on a former infilled quarry together with the proximity of the trees near the development boundary, a piled foundation solution with associated heavy protection was utilised</p>
  <div class="centered padding">
  <button class="button cancel" onclick="projects();">&times; close</button>
  </div>     
          `;
  }
  function projectInfo2() {
    projects();
    document.getElementById("project2").innerHTML = `
<div id="carouselExampleCaptions2" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/archbishop/ab07.jpg" class="project-main-image d-block w-75" alt="Ex. Archbishop McGrath School, Brynmenyn">
      <div class="carousel-caption d-none d-md-block"></div>
      </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab01.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab05.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab06.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab08.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab09.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/archbishop/ab10.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions2" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions2" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Ex. Archbishop McGrath School, Brynmenyn</h3>
    <ul>
      <li>
        Location: Brynmenyn, Bridgend
      </li>
      <li>
        Main Contractor: Jehu
      </li>
      <li>
        Client: Linc-Cymru Housing Association
      </li>
    </ul>
    <p>A 48 bed care / extra care unit together with 18 residential properties situated adjacent to the new Brynmenyn Primary School. Close liaising with the design team on the nearby college enable us to co-ordinate the design successfully.</p>
    <p>Drainage solutions included ground infiltration / soakaways for the domestic surface water, connection to the existing system for the highway drainage and foul water to the existing DCWW public sewer system. Also a diversion of an existing pumped foul water rising which served  the nearby college. Section 38 ( highways ) and Sections 185 /104 ( drainage ) were progressed to completion for this development.</p>
    <p>Past history established that a mine shaft was present, and subsequently treated and capped.</p>
    <p>A raft foundation solution was developed to guard against mining subsidence.</p>
    <div class="centered padding">
    <button class="button cancel" onclick="projects()">&times; close</button>
    </div>
          `;
}
function projectInfo3() {
  projects();
  document.getElementById("project3").innerHTML = `
<div id="carouselExampleCaptions3" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/durham/dh05.jpg" class="project-main-image d-block w-75" alt="Durham Road Build">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh06.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh07.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/durham/dh08.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions3" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions3" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Durham Road Build, Newport</h3>
<ul>
  <li>
    Location: Newport
  </li>
  <li>
    Main Contractor: Jehu
  </li>
  <li>
    Client: Linc-Cymru Housing Association
  </li>
</ul>
<p>A four storey building with 38 apartments which was constructed as a timber frame structure.</p>
<p>Due to the presence of fill material overlying alluvial deposits, a piled foundation solution with reinforced ground beams was designed.</p>
<p>Extensive drainage survey work was carried out and close liaising with Railtrack and Newport Land Drainage required to allow a restricted discharge of surface water to the existing culvert on the development boundary. On site surface water storage was designed to cater for the required discharge rate.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times; close</button>
</div>
  `;
}
function projectInfo4() {
  projects();
  document.getElementById("project4").innerHTML = `
<div id="carouselExampleCaptions4" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/merthyr/me04.jpg" class="project-main-image d-block w-75" alt="Merthyr Street, Barry">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/merthyr/me05.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions4" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions4" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Merthyr Street Build, Barry</h3>
<ul>
<li>
  Location: Barry, Vale of Glamorgan
</li>
<li>
  Main Contractor: W K Plasterers
</li>
<li>
  Client: W K Plasterers & Newydd Housing Association
</li>
</ul>
<p>Construction of a four storey using proprietary metal frame system for this previously developed site.</p>
<p>As this is a steep site, with roads to three sides, a part basement and being in close proximity to an adjacent terraced property presented significant difficulties in formulating a suitable piled foundation system which required cantilevered and stepped ground beams to accommodate the proposed and existing levels.</p>
<p>Drainage was connected to the existing DCWW public combined water system within Belvedere Crescent with a Section 104 drainage agreement being obtained.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times; close</button>
</div>
  `;
}
function projectInfo5() {
  projects();
  document.getElementById("project5").innerHTML = `
<div id="carouselExampleCaptions5" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/harrison/ha03.jpg" class="project-main-image d-block w-75" alt="Harrison Drive, Cardiff">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/harrison/ha01.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/harrison/ha04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions5" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions5" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Harrison Drive Build, Cardiff</h3>
<ul>
<li>
  Location: Cardiff
</li>
<li>
  Main Contractor: Hale Construction
</li>
<li>
  Client: Wales and West Housing Association
</li>
</ul>
<p>A 54 unit four and part three storey apartment block for Hale Construction on behalf of Wales and West Housing Association.</p>
<p>This inner city development has a range of amenity and bio-diversity boosting SuDS features gaining SAB approval from Cardiff City Council at the very start of the mandatory SAB process.</p>
<p>Foundations are all deep trench strip with foundation details devised to take account of the original basement constructions.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times; close</button>
</div>
  `;
}

function projectInfo6() {
  projects();
  document.getElementById("project6").innerHTML = `
<div id="carouselExampleCaptions6" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/projects/lanelay/la05.jpg" class="project-main-image d-block w-75" alt="Lanelay Road, Talbot Green">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la01.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la02.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la03.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>
    </div>
    <div class="carousel-item">
      <img src="assets/images/projects/lanelay/la04.jpg" class="project-main-image d-block w-75" alt="Project Images">
      <div class="carousel-caption d-none d-md-block"></div>        
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions6" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions6" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<h3 class="centered">Lanelay Road Build, Talbot Green</h3>
<ul>
<li>
  Location: Talbot Green, Llantrisant, RCT
</li>
<li>
  Main Contractor: W K Plasterers
</li>
<li>
  Client: W K Plasterers & Newydd Housing Association
</li>
</ul>
<p>Construction of a four storey using proprietary metal frame system for this previously developed site.</p>
<p>As this is a steep site, with roads to three sides, a part basement and being in close proximity to an adjacent terraced property presented significant difficulties in formulating a suitable piled foundation system which required cantilevered and stepped ground beams to accommodate the proposed and existing levels.</p>
<p>Drainage was connected to the existing DCWW public combined water system within Belvedere Crescent with a Section 104 drainage agreement being obtained.</p>
<div class="centered padding">
<button class="button cancel" onclick="projects()">&times; close</button>
</div>
`;
}
// Sourced from https://getbootstrap.com/docs/4.0/components/carousel/#:~:text=The%20carousel%20is%20a%20slideshow%20for%20cycling%20through,also%20includes%20support%20for%20previous%2Fnext%20controls%20and%20indicators.
$('.carousel').carousel()