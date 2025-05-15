<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>The Sound of the Unseen</title>
  <style>
    /* 기본 스타일 */
    body {
      margin: 0; padding: 0;
      font-family: Arial, sans-serif;
      background-color: black;
      color: white;
      text-align: center;
    }
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #111;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    nav .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-left: 1rem;
      font-weight: 500;
      transition: color 0.3s ease;
    }
    nav a:hover {
      color: gray;
    }

    /* Hero Section */
    header {
      position: relative;
      height: 100vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }
    header video {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    header .overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    header .content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      color: white;
    }
    header .content img {
      width: 50%;
      margin-bottom: 1rem;
    }
    header h1 {
      font-size: 3.5rem;
      margin: 0.2rem 0;
    }
    header h2 {
      font-size: 1.5rem;
      margin: 0.5rem 0;
      font-weight: normal;
    }
    header p {
      font-size: 1rem;
      margin: 0.3rem 0;
    }

    /* Sections */
    section {
      padding: 4rem 2rem;
      max-width: 900px;
      margin: auto;
    }
    section h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid gray;
      padding-bottom: 0.5rem;
    }
    section p {
      text-align: justify;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    /* Exhibition grid */
    #visualization .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    #visualization .card {
      background: #222;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px #000;
    }

    /* Contact grid */
    #contact .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    #contact .member {
      background: #222;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px #000;
      color: white;
    }
    #contact .member img {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    #contact .member p {
      margin: 0.3rem 0;
    }

    /* Footer */
    footer {
      padding: 2rem;
      background-color: #111;
      color: #888;
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 600px) {
      header h1 {
        font-size: 2.5rem;
      }
      header .content img {
        width: 70%;
      }
    }
  </style>
</head>
<body>

  <nav>
    <div class="logo">The Sound of the Unseen</div>
    <div>
      <a href="#home">Home</a>
      <a href="#concept">Concept</a>
      <a href="#visualization">Visualization</a>
      <a href="#technology">Technology</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <header id="home">
    <video autoplay loop muted playsinline>
      <source src="mainvideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
    <div class="content">
      <img src="maingraphic.png" alt="Main Graphic" />
      <h1>The Sound of the Unseen</h1>
      <h2>감각의 확장</h2>
      <p>식물의 Biorhythms을 이용한 Sound Visualization</p>
      <p>Team: 동심</p>
    </div>
  </header>

  <section id="concept">
    <h2>Concept - Abstract</h2>
    <p>
      우리는 사회를 인식할 때 표면적인 정보에만 의존해, 이면 속에 숨어있는 신호를 놓치고 사회를 편향되게 이해할 때가 있습니다.
      본 작품은 식물을 통해 사회를 은유적으로 표현하며, 겉으로 드러나지 않는 수많은 신호가 존재하고 흐른다는 사실을 드러내고자 합니다.
      관객은 이 과정에 직접 개입하며, 감춰진 신호를 인지하고 해석하는 경험을 하게 됩니다.
    </p>
    <p>
      식물은 끊임없이 미세한 전기적 리듬을 발산하지만, 이는 인간의 감각으로는 감지되지 않습니다. 이는 곧 사회 속 보이지 않는 정보와도 맞닿아 있습니다.
      관객이 식물에 접촉하면, MIDI 컨트롤러 Biotron이 식물의 바이오리듬을 감지해 소리로 변환합니다. 생성된 소리는 다시 사이매틱스 원리를 통해 물리적 패턴을 형성하며,
      이 과정을 웹캠이 실시간으로 인식해 시각적 이미지로 확장합니다.
    </p>
    <p>
      본 작품은 기술을 통해 일상 속에서 볼 수 있는 단순한 매개로부터 감각과 인식의 범위를 확장하며 관객에게 익숙한 사회의 표면을 넘어, 그 이면에 흐르는 신호들을 바라보고
      경험하는 새로운 인식의 가능성을 제안하고자 합니다.
    </p>
  </section>

  <section id="visualization">
    <h2>Exhibition</h2>
    <div class="grid">
      <div class="card">작품 1</div>
      <div class="card">작품 2</div>
      <div class="card">작품 3</div>
    </div>
  </section>

  <section id="technology">
    <h2>Technology</h2>
    <p>TouchDesigner, WebGL, MIDI Controller를 활용한 시각화 기술 설명이 여기에 들어갑니다.</p>
  </section>

  <section id="contact">
    <h2>Contact / Team</h2>
    <div class="grid">
      <div class="member">
        <img src="path/to/image1.jpg" alt="정지원" />
        <p>정지원</p>
        <p>개발, 디자인</p>
        <p>wjdwldnjs427@naver.com</p>
        <p>010-5873-4277</p>
      </div>
      <div class="member">
        <img src="path/to/image2.jpg" alt="박승민" />
        <p>박승민</p>
        <p>개발, 디자인</p>
        <p>ligers9999@gmail.com</p>
        <p>010-4641-0214</p>
      </div>
      <div class="member">
        <img src="path/to/image3.jpg" alt="채승룡" />
        <p>채승룡</p>
        <p>기획, 디자인</p>
        <p>csy1669@naver.com</p>
        <p>010-3151-1669</p>
      </div>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 The Sound of the Unseen. All rights reserved.</p>
  </footer>

</body>
</html>
