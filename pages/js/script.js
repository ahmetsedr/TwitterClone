const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
    e.target.classList.add("active");
    const section = e.target.getAttribute("data-section");
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const cardSection = card.getAttribute("id");
      if (cardSection === section) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    if (section === "tweet") {
      const texts = ['Merhaba, ben Ahmet Semih. Üretken Akademi yazılım programının bir üyesiyim. HTML, CSS, JS, SASS ve SCSS ile tecrübeli bir web geliştiriciyim. Ayrıca, versiyon kontrol sistemi GIT ile de deneyimliyim. Responsive tasarım ve tarayıcı uyumluluğu konularına önem veririm ve Web Vitals hakkında da bilgim var. Webpack ve NPM hakkında da bilgi sahibiyim. Takipte kalın.', '<div class="p-3 d-flex justify-content-center align-items-center flex-column"><p>Bu videoda bir twitter klonu yapmaya çalıştım.</p><iframe class="container"  width="560" height="315" src="https://www.youtube.com/embed/hYaOg0g2msc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>', '<div class="p-3 d-flex justify-content-center align-items-center flex-column"<p>Bu videoda bir film sitesi demosu yaptım.</p><iframe class="container"  width="560" height="315" src="https://www.youtube.com/embed/EG-tmZvL03A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>', '<div class="p-3 d-flex justify-content-center align-items-center flex-column"><p>Bu videoda bootsatrap ile ilk projemi yaptım.</p><iframe class="container" width="560" height="315" src="https://www.youtube.com/embed/X4ov3MXkIN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>'];
      const tweet = document.querySelector('#tweet');
      const dates = ['az önce', '07.02.2023', '31.01.2023', '31.01.2023'];

      const html = dates.map((input, index) => {


        return `
            <div class="container">
              <div style="background-color:black;border:1px solid whitesmoke;" class="card mt-5 text-light">
                <div class="card-header border-0 pb-0">
                  <div class="d-flex align-items-center justify-content-start">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="avatar me-2" style="width:3rem;">
                        <a href="#">
                          <img class="avatar-img rounded-circle" src="https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/ahmetse/profilePicture" alt="..." style="width:100%">
                        </a>
                      </div>
                      <div class="d-inline">
                        <h6 class="card-title mb-0 position-relative float-start">Ahmet Semih Dur</h6><br>
                        <p class="mb-0 small float-start">${input} tarihinde paylaşldı</p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <p>${texts[index]}</p>
                  </div>
                  <ul class="nav nav-stack pb-2 small column">
                    <li class="nav-item col-md-3">
                      <a class="nav-link active text-secondary" href="#!">
                        <i class="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="card-footer py-3">
            <!-- Feed react START -->
            <ul class="nav nav-fill nav-stack small column">
              <li class="nav-item col-md-3 ">
                <a href="#" class="nav-link mavi"> <i class="fa-solid fa-comment"></i></a>
              </li>
              
              
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0 active" href="#!"> <i class="fa-solid fa-heart"></i> </a>
              </li>
              <!-- Card share action dropdown START -->
              <li class="nav-item col-md-3 dropdown">
                <a href="#" class="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-retweet"></i>
                </a>
                <!-- Card share action dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                </ul>
              </li>
              <!-- Card share action dropdown END -->
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0" href="#!"> <i class="fa-solid fa-paper-plane"></i> </a>
              </li>
            </ul>
            <!-- Feed react END -->
          </div>
                </div>
              </div>
            </div>
          `;
      }).join('');

      tweet.innerHTML = html;
    }

    else if (section === "experience") {
      const texts = ['Bilgi işlem - Toki istanbul 06.09.2021 - 17.06.2022 <br>Front - End Geliştirmeyi Burada Sevdim.Güzel tecrübe edindiğim, insan ilişkileri, iş düzeni, öz saygı, vb.birçok alanda kendimi geliştirdiğim yer oldu.Her birime girdiğimizden birçok iş hakkında bilgi sahibiyim.'];
      const experience = document.querySelector('#experience');
      const dates = ['12.06.2022'];

      const html = dates.map((input, index) => {


        return `
            <div class="container">
              <div style="background-color:black;border:1px solid whitesmoke;" class="card mt-5 text-light">
                <div class="card-header border-0 pb-0">
                  <div class="d-flex align-items-center justify-content-start">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="avatar me-2" style="width:3rem;">
                        <a href="#">
                          <img class="avatar-img rounded-circle" src="https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/ahmetse/profilePicture" alt="..." style="width:100%">
                        </a>
                      </div>
                      <div class="d-inline">
                        <h6 class="card-title mb-0 position-relative float-start">Ahmet Semih Dur</h6><br>
                        <p class="mb-0 small float-start">${input} tarihinde paylaşldı</p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                    <p>${texts[index]}</p>
                  </div>
                  <ul class="nav nav-stack pb-2 small column">
                    <li class="nav-item col-md-3">
                      <a class="nav-link active text-secondary" href="#!">
                        <i class="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="card-footer py-3">
            <!-- Feed react START -->
            <ul class="nav nav-fill nav-stack small column">
              <li class="nav-item col-md-3 ">
                <a href="#" class="nav-link mavi"> <i class="fa-solid fa-comment" id="yorumbtn"></i></a>
              </li>
              
              
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0 active" href="#!"> <i class="fa-solid fa-heart"></i> </a>
              </li>
              <!-- Card share action dropdown START -->
              <li class="nav-item col-md-3 dropdown">
                <a href="#" class="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-retweet"></i>
                </a>
                <!-- Card share action dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                </ul>
              </li>
              <!-- Card share action dropdown END -->
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0" href="#!"> <i class="fa-solid fa-paper-plane"></i> </a>
              </li>
            </ul>
            <!-- Feed react END -->
          </div>
                </div>
              </div>
            </div>
          `;
      }).join('');

      experience.innerHTML = html;


    }
    else if (section ===
      "roadAndEducation") {

      const roadAndEducation = document.querySelector('#roadAndEducation');
      const dates = ['12.02.2023'];

      const html = dates.map((input, index) => {


        return `
            <div class="container">
              <div style="background-color:black;border:1px solid whitesmoke;" class="card mt-5 text-light">
                <div class="card-header border-0 pb-0">
                  <div class="d-flex align-items-center justify-content-start">
                    <div class="d-flex align-items-center justify-content-between">
                      <div class="avatar me-2" style="width:3rem;">
                        <a href="#">
                          <img class="avatar-img rounded-circle" src="https://patika-prod.s3-eu-central-1.amazonaws.com/userFiles/ahmetse/profilePicture" alt="..." style="width:100%">
                        </a>
                      </div>
                      <div class="d-inline">
                        <h6 class="card-title mb-0 position-relative float-start">Ahmet Semih Dur</h6><br>
                        <p class="mb-0 small float-start">${input} tarihinde paylaşldı</p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="card-body pb-0">
                  <h1 align="center">👋 Hi, I’m @ahmetsedr </h1>
                  <div align="center">
                    <img align="center" alt="Coding" width="250" src="https://media.tenor.com/ang0VzOwbdAAAAAS/the-matrix-reloaded-matrix.gif">
                    <p align="center">Merhaba, ben Ahmet Semih. <a href="https://uretkenakademi.com/" target="_blank">Üretken Akademi</a> yazılım programının bir üyesiyim. HTML, CSS, JS, SASS ile tecrübeli bir web geliştiriciyim. Ayrıca, versiyon kontrol sistemi GIT ile de deneyimliyim. Responsive tasarım ve tarayıcı uyumluluğu konularına önem veririm ve Web Vitals hakkında da bilgim var. Webpack ve NPM hakkında da bilgi sahibiyim. Takipte kalın.</p>
                  </div>
                  
                  <h3 align="center">Social Meida:</h3>
                  <p align="center">
                    <a href="https://www.linkedin.com/in/ahmet-semih-dur/" target="blank">
                      <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="ahmetsemihdur" height="30" width="30" />
                    </a>
                    <a href="https://codepen.io/ahmetsedr" target="blank">
                      <img align="center" src="https://www.svgrepo.com/show/353582/codepen-icon.svg" alt="ahmetsemihdur" height="30" width="30" />
                    </a>
                    <a href="https://www.youtube.com/@ahmetsemihdur" target="blank">
                      <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/888aff31e1d26dd2a6acf6afebbc34970aeb0118/src/images/icons/Social/youtube.svg" alt="ahmetsemihdur" height="30" width="30" />
                    </a>
                    <a href="mailto:ahmetsecodr@gmail.com" target="blank">
                      <img align="center" src="https://freesvg.org/img/Mail-Icon-White-on-Grey.png" alt="ahmetsemihdur" height="30" width="30" />
                    </a>
                  </p>
                  <h3 align="center">Languages and Tools:</h3>
                  <p align="center"> 
                  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> 
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50"/> 
                  </a> 
                  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> 
                  </a>
                  <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> 
                  </a>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> 
                  </a>
                  <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50"/> 
                  </a>
                    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"> 
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/888aff31e1d26dd2a6acf6afebbc34970aeb0118/src/images/icons/FrontendDevelopment/sass.svg" alt="bootstrap" width="50" height="50"/> 
                  </a>
                    <div align="center"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                   <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/888aff31e1d26dd2a6acf6afebbc34970aeb0118/src/images/icons/FrontendDevelopment/reactjs.svg" alt="bootstrap" width="50" height="50"/> 
                  </a></div><p align="center">(Learn)</p>
                  
                  
                  
                  </div>
                  <ul class="nav nav-stack pb-2 small column">
                    <li class="nav-item col-md-3">
                      <a class="nav-link active text-secondary" href="#!">
                        <i class="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="card-footer py-3">
            <!-- Feed react START -->
            <ul class="nav nav-fill nav-stack small column">
              <li class="nav-item col-md-3 ">
                <a href="#" class="nav-link mavi"> <i class="fa-solid fa-comment"></i></a>
              </li>
              
              
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0 active" href="#!"> <i class="fa-solid fa-heart"></i></a>
              </li>
              <!-- Card share action dropdown START -->
              <li class="nav-item col-md-3 dropdown">
                <a href="#" class="nav-link mb-0" id="cardShareAction6" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fa-solid fa-retweet"></i>
                </a>
                <!-- Card share action dropdown menu -->
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction6">
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                </ul>
              </li>
              <!-- Card share action dropdown END -->
              <li class="nav-item col-md-3">
                <a class="nav-link mb-0" href="#!"> <i class="fa-solid fa-paper-plane"></i></a>
              </li>
            </ul>
            <!-- Feed react END -->
          </div>
                </div>
              </div>
            </div>
          `;
      }).join('');

      roadAndEducation.innerHTML = html;
    }
    else if (section === "projects") {
      window.open("https://ahmetsedr.github.io/ahmetsemihdur/", "_blank");
    }
  });
});
