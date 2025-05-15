import React from 'react';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-5">
        <div className="text-2xl font-bold">The Sound of the Unseen</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#concept" className="hover:text-gray-400">Concept</a>
          <a href="#visualization" className="hover:text-gray-400">Visualization</a>
          <a href="#technology" className="hover:text-gray-400">Technology</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>

      {/* Main Section */}
      <header id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/mnt/data/mainvideo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-xl">
          <img src="/mnt/data/maingraphic.png" alt="Main Graphic" className="w-1/2 mb-5"/>
          <h1 className="text-5xl mb-2 text-center">The Sound of the Unseen</h1>
          <h2 className="text-lg mb-2 text-center">감각의 확장</h2>
          <p className="text-sm mb-4 text-center">식물의 Biorhythms을 이용한 Sound Visualization</p>
          <p className="text-sm text-center">Team: 동심</p>
        </div>
      </header>

      {/* Concept Section */}
      <section id="concept" className="p-10 text-center">
        <h2 className="text-3xl mb-5">Concept - Abstract</h2>
        <p className="mb-5">
          우리는 사회를 인식할 때 표면적인 정보에만 의존해, 이면 속에 숨어있는 신호를 놓치고 사회를 편향되게 이해할 때가 있습니다.
          본 작품은 식물을 통해 사회를 은유적으로 표현하며, 겉으로 드러나지 않는 수많은 신호가 존재하고 흐른다는 사실을 드러내고자 합니다.
          관객은 이 과정에 직접 개입하며, 감춰진 신호를 인지하고 해석하는 경험을 하게 됩니다.
        </p>
        <p className="mb-5">
          식물은 끊임없이 미세한 전기적 리듬을 발산하지만, 이는 인간의 감각으로는 감지되지 않습니다. 이는 곧 사회 속 보이지 않는 정보와도 맞닿아 있습니다.
          관객이 식물에 접촉하면, MIDI 컨트롤러 Biotron이 식물의 바이오리듬을 감지해 소리로 변환합니다. 생성된 소리는 다시 사이매틱스 원리를 통해 물리적 패턴을 형성하며,
          이 과정을 웹캠이 실시간으로 인식해 시각적 이미지로 확장합니다.
        </p>
        <p>
          본 작품은 기술을 통해 일상 속에서 볼 수 있는 단순한 매개로부터 감각과 인식의 범위를 확장하며 관객에게 익숙한 사회의 표면을 넘어, 그 이면에 흐르는 신호들을 바라보고
          경험하는 새로운 인식의 가능성을 제안하고자 합니다.
        </p>
      </section>

      {/* Exhibition Section */}
      <section id="visualization" className="p-10 text-center">
        <h2 className="text-3xl mb-5">Exhibition</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800 p-5 rounded-lg">작품 1</div>
          <div className="bg-gray-800 p-5 rounded-lg">작품 2</div>
          <div className="bg-gray-800 p-5 rounded-lg">작품 3</div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="p-10 text-center">
        <h2 className="text-3xl mb-5">Technology</h2>
        <p>TouchDesigner, WebGL, MIDI Controller를 활용한 시각화 기술 설명이 여기에 들어갑니다.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl mb-5">Contact / Team</h2>
        <div className="grid grid-cols-3 gap-10">
          <div>
            <img src="/path/to/image1.jpg" alt="정지원" className="w-40 h-40 rounded-full mb-4 mx-auto"/>
            <p>정지원</p>
            <p>개발, 디자인</p>
            <p>wjdwldnjs427@naver.com</p>
            <p>010-5873-4277</p>
          </div>
          <div>
            <img src="/path/to/image2.jpg" alt="박승민" className="w-40 h-40 rounded-full mb-4 mx-auto"/>
            <p>박승민</p>
            <p>개발, 디자인</p>
            <p>ligers9999@gmail.com</p>
            <p>010-4641-0214</p>
          </div>
          <div>
            <img src="/path/to/image3.jpg" alt="채승룡" className="w-40 h-40 rounded-full mb-4 mx-auto"/>
            <p>채승룡</p>
            <p>기획, 디자인</p>
            <p>csy1669@naver.com</p>
            <p>010-3151-1669</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-5">
        <p>&copy; 2025 The Sound of the Unseen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
""
