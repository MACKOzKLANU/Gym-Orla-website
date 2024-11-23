
function Timeline() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      else {
        entry.target.classList.remove("show");
      }
    
    });
  })
  
  const hiddenElements = document.querySelectorAll('.timeline')
  hiddenElements.forEach((element) => observer.observe(element));
  
  return (
    <div>
      <section>
        <div class="container py-5">
          <div class="main-timeline">
            <div class="timeline left">
              <div class="card">
                <div class="card-body p-4">
                  <h3>September 2022</h3>
                  <p class="mb-0">
                    It all started in a small attic space. With minimal
                    equipment and a passionate spirit, I began my fitness
                    journey alone. The attic was my sanctuary, a place where I
                    honed my skills and developed my love for fitness.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card">
                <div class="card-body p-4">
                  <h3>March 2023</h3>
                  <p class="mb-0">
                    As my dedication grew, so did my aspirations. I realized the
                    attic, though cozy, was limiting. Dreams of a more
                    extensive, professional setup began to take shape. I started
                    planning and saving for a new space that could accommodate
                    more equipment and perhaps a few training partners.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card">
                <div class="card-body p-4">
                  <h3>September 2023</h3>
                  <p class="mb-0">
                    By September 2023, I transformed our family garage into a
                    more functional gym. Initially, half of the garage was
                    occupied by a tractor, leaving me with only half the space
                    for my workouts. Despite the limited space, I made the best
                    of what I had, sharing the area with my trusty tractor.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card">
                <div class="card-body p-4">
                  <h3>March 2024</h3>
                  <p class="mb-0">
                    By March 2024, as more friends and acquaintances began
                    joining, I knew it was time to take the next step. I managed
                    to clear out the tractor and take over the entire garage.
                    This allowed me to set up more equipment and provide a
                    better training environment for my growing clientele.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline left">
              <div class="card">
                <div class="card-body p-4">
                  <h3>September 2024</h3>
                  <p class="mb-0">
                    With the entire garage now dedicated to fitness, I started
                    gaining more clients. The garage gym became well-known for
                    effective workouts and personalized coaching. My investment
                    in more equipment and diverse training programs paid off,
                    and the garage was buzzing with activity.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline right">
              <div class="card">
                <div class="card-body p-4">
                  <h3>November 2024</h3>
                  <p class="mb-0">
                    Recognizing the importance of digital presence, I started
                    developing a website and an app for Gym Orła in November
                    2024. These digital tools will provide clients with easy
                    access to information, booking, and resources, further
                    enhancing their fitness journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
