---
layout: project_page
permalink: /
---
작품명: 이면의 소리: 감각의 확장

members:
  - 박승민
  - 정지원
  - 채승룡
---


<body>
  <hr>
  <img src = "main_imgae.jpg" alt = "Example 001" style="display: block; margin: auto;">
</body>


<!-- Using HTML to center the abstract -->
<div class="columns is-centered has-text-centered">
  <div class="column is-four-fifths">
    <h2>Abstract</h2>
    <div class="content has-text-justified">
      우리는 사회를 인식할 때 표면적인 정보에만 의존해, 이면 속에 숨어있는 신호를 놓치고 사회를 편향되게 이해할 때가 있습니다. 본 작품은 식물을 통해 사회를 은유적으로 표현하며, 겉으로 드러나지 않는 수많은 신호가 존재하고 흐른다는 사실을 드러내고자 합니다. 관객은 이 과정에 직접 개입하며, 감춰진 신호를 인지하고 해석하는 경험을 하게 됩니다.

식물은 끊임없이 미세한 전기적 리듬을 발산하지만, 이는 인간의 감각으로는 감지되지 않습니다. 이는 곧 사회 속 보이지 않는 정보와도 맞닿아 있습니다. 관객이 식물에 접촉하면, MIDI 컨트롤러 Biotron이 식물의 바이오리듬을 감지해 소리로 변환합니다. 생성된 소리는 다시 사이매틱스 원리를 통해  물리적 패턴을 형성하며, 이 과정을 웹캠이 실시간으로 인식해 시각적 이미지로 확장합니다. 관객은 이 흐름 속에서 보이지 않던 생명 활동 속에서 시작해 소리, 물리적 형태, 이미지까지 순차적으로 감각과 인식의 범위가 확장되는 과정을 직접 체험하게 됩니다.

본 작품은 기술을 통해 일상 속에서 볼 수 있는 단순한 매개로부터 감각과 인식의 범위를 확장하며 관객에게 익숙한 사회의 표면을 넘어, 그 이면에 흐르는 신호들을 바라보고 경험하는 새로운 인식의 가능성을 제안하고자 합니다.
    </div>
  </div>
</div>


<!-- Dataset Download Buttons -->

## SIDL Dataset 
We provide 80% of the scenes for training and learning. The remaining scenes are used for online evaluation.
### Patchify images (512x512)
For efficient training and learning, we provide patchified images. 
<div class="buttons" style="text-align: center; margin-top: 1em;">
  <a class="button is-primary" href="https://drive.google.com/file/d/1es3rPo5Y9O96EjDVXanUY8NpaRprWH-h/view?usp=sharing" target="_blank">Train</a>
  <a class="button is-primary" href="https://drive.google.com/file/d/1u5-MDauO3XolXsU6eOARwlXo7SnpLwqA/view?usp=sharing" target="_blank">Validation</a>
  <a class="button is-primary" href="https://drive.google.com/file/d/1-SFyyjH0G3C68OfDjZ_O7M4mOqkcJdEf/view?usp=sharing" target="_blank">Test</a>
</div>

### Full-resolution images (4032x3024)
<div class="buttons" style="text-align: center; margin-top: 1em;">
  <a class="button is-primary" href="https://drive.google.com/file/d/1s_gUw1DCqokihl3YtO3lu9_GnLZaSElI/view?usp=sharing" target="_blank">Train</a>
  <a class="button is-primary" href="https://drive.google.com/file/d/1OHxG8Jh0goKIhkJTe9NXZ6uIuD5qVaNH/view?usp=sharing" target="_blank">Validation</a>
</div>

### RAW files
We also provide RAW image files (DNG) along with metadata.
<div class="buttons" style="text-align: center; margin-top: 1em;">
  <a class="button is-primary" href="https://drive.google.com/file/d/1k78IIsUl2eYPnPvWkBampU0qlMrW4F-u/view?usp=sharing" target="_blank">DNG images</a>
  <a class="button is-primary" href="https://drive.google.com/file/d/1lAab5F3jjCByY4OEvGSAfykyAqp2wfTi/view?usp=sharing" target="_blank">Metadata</a>
</div>

### Online Evaluation  
<div class="buttons" style="text-align: center; margin-top: 1em;">
  <a class="button is-primary" href="http://203.253.25.170:8080" target="_blank">Click here to launch evaluation</a>
</div>  
Click the button above to evaluate your model on the SIDL benchmark.


### ISP pipeline
Coming soon


### Citation
<pre><code class="language-bibtex">
@inproceedings{choi2025sidl,
  title     = {SIDL: A Real-World Dataset for Restoring Smartphone Images with Dirty Lenses},
  author    = {Choi, Sooyoung and Park, Sungyong and Kim, Heewon},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {39},
  number    = {3},
  pages     = {2545--2554},
  year      = {2025}
}
</code></pre>




